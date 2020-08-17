//定义
let inputName = document.getElementsByClassName('name')[0]
let inputPassword = document.getElementsByClassName('password')[0]
let registBtn = document.getElementsByClassName('regist-btn')[0]

//检查姓名
function checkName() {

}

//检查密码
function checkPassword() {

}

//发送请求
function checkBtn() {
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/user/regist',
        data: {
            name: inputName.Value,
            password: inputPassword.value
        }
    })
}

inputName.onblur = checkName
inputPassword.onblur = checkPassword
registBtn.onclick = checkBtn