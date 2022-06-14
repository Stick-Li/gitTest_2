$(function () {
    $('#formLogin').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()

        console.log(data)
        $.post('http://127.0.0.1:8080/login', data, (res) => {
            console.log('js',res)
            if(res.status!==200){
                // return alert('错误')
                if(res.status===500)return alert('工号填写错误')
                else if(res.status==501)return alert('密码错误')
                else return alert('未知错误')
            }
            alert('登陆成功')
        })
    })
})