function getTeacherInfo() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:8080/getinfo',
        data: {},
        success: function (res) {
            if (res.status !== 200) return alert('获取评论列表失败')

            console.log('获取数据成功', res)
            var rows = []
            $.each(res.data, (i, item) => {
                //     var str = `<li class="list-group-item">
                //     <span class="badge" style="background-color: #F0AD4E;">工号：${item.id}</span>
                //     ${item.name}&emsp;${item.phone}
                // </li>`
                var str = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.phone}</td></tr>`
                rows.push(str)
            })
            $('#infoList').empty().append(rows.join(''))
        }

    })
}
getTeacherInfo()

$(function () {
    $('#formAddInfo').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()

        console.log(data)
        $.post('http://127.0.0.1:8080/addinfo', data, (res) => {
            console.log(res)
            if (res.status != 200) return alert('工号非数字或已存在')
            getTeacherInfo()
            $('#formAddCmt')[0].reset()
        })
    })
})