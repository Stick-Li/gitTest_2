$(function () {
    $('#formChangePsw').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()

        console.log(data)

        $.post('http://127.0.0.1:8080/changepsw', data, (res) => {
            console.log('js', res)
            if (res.status !== 200) {
                // return alert('错误')
                if (res.status === 500) return alert('工号不存在')
                else if (res.status == 501) return alert('旧密码错误')
                else if (res.status === 502) return alert('密码重置失败')
                else if (res.status === 504) return alert('新旧密码不得相同')
                else return alert('未知错误')
            }
            return alert('密码修改成功')

        })


    })
})