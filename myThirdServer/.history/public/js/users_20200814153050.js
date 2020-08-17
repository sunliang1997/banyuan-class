//定义
let inputName = document.getElementsByClassName('name')[0]
let inputPassword = document.getElementsByClassName('password')[0]
let registBtn = document.getElementsByClassName('regist-btn')[0]

nameEnable = false
passwordEnable = false


//检查姓名
function checkName() {

}

//检查密码
function checkPassword() {
    let password = inputPassword.value

    if (password) {
        let flag = parttenPassword(password)

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
        url: 'http://localhost:3000/user/regist',
        data: {
            name: inputName.value,
            password: inputPassword.value
        },
        success: () => {

        }
    })
}

function enableButton() {
    registBtn.disabled = !(nameEnable && passwordEnable)
}

inputName.onblur = checkName
inputPassword.onblur = checkPassword
registBtn.onclick = checkBtn