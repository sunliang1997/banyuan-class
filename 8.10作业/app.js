const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

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

const port = process.env.PORT || config.port

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
  .use(router.routes())
  .use(router.allowedMethods())


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

// router.post('/post', async (ctx, next) => {
//   const query = ctx.request.body;

//   if (query.status == 'string') {
//     await sleep(5000);
//   }

//   ctx.response.body = {
//     status: 'success'
//   }
// })

// router.post('/checkName', async (ctx, next) => {
//   const { name } = ctx.request.body;
//   const n = ['abcd', '1234', '2222'];
//   var patten = /^[a-zA-Z0-9_-]{4,16}$/;
//   var flag = patten.test(name);
//   const data = {};
//   if (n.indexOf(name) == -1) {
//     data.include = false;
//   }
//   else {
//     data.include = true;
//   }

//   ctx.response.body = {
//     data, flag
//   }
// })

// router.post('/checkTotal', async (ctx, next) => {
//   const { name, password } = ctx.request.body;
//   const n = ['abcd', '1234', '2222'];
//   var pattenN = /^[a-zA-Z0-9_-]{4,16}$/;
//   var flagN = pattenN.test(name);
//   var pattenP = /^\w{8,15}$/;
//   var flagP = pattenP.test(password);
//   const data = {};
//   if (n.indexOf(name) == -1) {
//     data.include = false;
//   }
//   else {
//     data.include = true;
//   }
//   if (flagN && flagP && !data.include) {
//     ctx.response.body = { name, password }
//   }

// })

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
  console.log('close ===>', name)
  let index;
  console.log(tasks);
  tasks.forEach((item, i) => {

    if (item.name === name) {
      console.log('in');
      index = i;
    }
  });

  console.log('index ==>', index);
  tasks.splice(index, 1)

  console.log(tasks)
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
