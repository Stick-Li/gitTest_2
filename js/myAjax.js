// 处理 data 函数
function resolveData(data) {
    var arr = []
    for (const k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}

// var res = resolveData({ name: '姜饼人', age: 19 })
// console.log(res)     // name=姜饼人&age=19

function myAjax(options) {
    var xhr = new XMLHttpRequest()

    // 把外界传递过来的参数对象，转换为查询字符串
    var qs = resolveData(options.data)

    // 发起请求
    if (options.method.toUpperCase() === 'GET') {
        xhr.open('GET', options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}