//注册定义
let inputName = document.getElementsByClassName('name')[0]
let inputPassword = document.getElementsByClassName('password')[0]
let registBtn = document.getElementsByClassName('regist-btn')[0]

//登陆定义
let loginName = document.getElementsByClassName('login-name')[0]
let loginPassword = document.getElementsByClassName('login-password')[0]
let loginBtn = document.getElementsByClassName('login-btn')[0]


nameEnable = false
passwordEnable = false

/**
 * 正则检查姓名
 * 发送到后端检查姓名是否重复
 */
//检查姓名
function checkName() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/users/checkName',
        data: {
            name: inputName.value
        },
        success: (result) => {

            nameEnable = result.flag
            enableButton()
            if (!result.flag) {
                alert(result.message)
            }
        }
    })
}

//检查密码
function checkPassword() {
    let password = inputPassword.value

    if (password) {
        let flag = parttenPassword(password)

        passwordEnable = flag

        enableButton()
    }
}

function parttenPassword(password) {
    let partten = /\w{8,15}/
    return partten.test(password)
}

//发送请求
function checkBtn() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/users/regist',
        data: {
            name: inputName.value,
            password: inputPassword.value
        },
        success: (result) => {
            console.log(result.status)
            if (result.status === 'success') {
                alert('注册成功')
            }
        }
    })
}

//检查登陆
function checkLogin() {
    let loginNameValue = loginName.value
    let loginPasswordValue = loginPassword.value

    //如果两个都不为空的情况下
    if (loginNameValue && loginPasswordValue) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/users/login',
            data: {
                name: loginName.value,
                password: loginPassword.value
            },
            success: (result) => {
                console.log(re)
            }
        })
    }
}

function enableButton() {
    registBtn.disabled = !(nameEnable && passwordEnable)
}

inputName.onblur = checkName
inputPassword.onblur = checkPassword
registBtn.onclick = checkBtn
loginBtn.onclick = checkLogin