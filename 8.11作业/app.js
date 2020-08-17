const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const session = require('koa-session')
const cors = require('koa2-cors')
const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')
const { SSL_OP_EPHEMERAL_RSA } = require('constants')
const { resolve } = require('path')
const { rejects } = require('assert')
const { createContext } = require('vm')

const port = process.env.PORT || config.port

const CONFIG = {
  key: 'koa.sess',
  maxAge: 5000
};
// error handler
onerror(app)



// middlewares
app.use(bodyparser())
  .use(json())
  .use(cors({
    credentials: true,
  }))
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: { settings: { views: path.join(__dirname, 'views') } },
    map: { 'njk': 'nunjucks' },
    extension: 'njk'
  }))
  .use(session(CONFIG, app))
  .use(router.routes())
  .use(router.allowedMethods())


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', (ctx, next) => {
  ctx.session.user = { name: 'tom' }
})

router.get('/login', async (ctx, next) => {
  await ctx.render('index')
})

router.get('/loginTest', async (ctx, next) => {
  let user = ctx.session.user;
  let password = ctx.session.password;

  if (user && password) {
    ctx.redirect('todolist')
  }
  else {
    ctx.redirect('/login');
  }
})

router.post('/login', (ctx, next) => {
  const { name, password } = ctx.request.body;
  let name1 = JSON.stringify(name);
  let password1 = JSON.stringify(password);
  ctx.session.user = name1;
  ctx.session.password = password1;
  ctx.response.body = {
    name1, password1
  };
})

router.get('/todoList', async (ctx, next) => {
  ctx.state = {
    tasks
  }
  await ctx.render('todolist', ctx.state)
})

let tasks = [
]

router.get('/todoList', async (ctx, next) => {
  ctx.state = {
    tasks
  }
  await ctx.render('todolist', ctx.state)
})

router.post('/checkTask', (ctx, next) => {
  const { name, checked } = ctx.request.body;

  tasks.forEach((item) => {
    if (item.name === name) {
      item.checked = !item.checked
    }
  });

  ctx.response.body = {
    status: 'success'
  }
})


router.post('/addTask', (ctx, next) => {
  const { name } = ctx.request.body;
  tasks.push({
    name,
    checked: false
  })
  ctx.response.body = {
    status: 'success'
  }
});

router.post('/closeTask', (ctx, next) => {
  const { name } = ctx.request.body;
  let index;
  tasks.forEach((item, i) => {

    if (item.name === name) {
      index = i;
    }
  });
  tasks.splice(index, 1)
  ctx.response.body = {
    tasks
  }
})

// router.get('/', async (ctx, next) => {

//   let people = [
//     {
//       name: 'zhangsan',
//       age: '11'
//     },
//     {
//       name: 'lisi',
//       age: '22'
//     }
//   ]

//   ctx.state = {
//     title: ["banyuan", "111"],
//     content: "我们是半圆学社",
//     test: "test11112",
//     flag: true,
//     gender: 1,
//     ple: people
//   }


//   await ctx.render('todolist')
// })

routes(router)
app.on('error', function (err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})

app.keys = ['cjs']



