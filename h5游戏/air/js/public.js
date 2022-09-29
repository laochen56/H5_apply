// 公用方法

//判断是否是移动端
function isPhone() {
    var arr = ["iPhone","iPad","Android"];
    var is = false;
    for (var i=0; i<arr.length; i++) {
        if (navigator.userAgent.includes(arr[i])) {
            is = true;
            break;
        }
    }
    return is;
}

//随机函数
function rand(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}