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
                if (result.status === 'success') {
                    alert('登陆成功')
                } else {
                    alert(result.message)
                }
            }
        })
    } else if (loginPasswordValue && !loginNameValue) {
        alert('用户名不能为空！')
    } else if (loginNameValue && !loginPasswordValue) {
        alert('密码不能为空！')
    } else if (!loginNameValue && !loginPasswordValue) {
        alert('你输入了个寂寞')
    }
}

loginBtn.onclick = checkLogin