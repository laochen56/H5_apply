// 完成小飞机的所有内容

var dHero = document.getElementById("hero");

//重新定位hero的位置
function setHeroPosition() {
    dHero.style.left = (sw-66)/2 + 'px';
    dHero.style.top = sh - 82 + 'px';
}


//pc端添加键盘事件
//状态
var isLeft = false;
var isTop = false;
var isRight = false;
var isBottom = false;
//键盘按下事件
window.onkeydown = function(e) {
    if (e.keyCode === 37) {
        isLeft = true;
    } else if (e.keyCode === 38) {
        isTop = true;
    } else if (e.keyCode === 39) {
        isRight = true;
    } else if (e.keyCode === 40) {
        isBottom = true;
    }  
}

//键盘抬起事件
window.onkeyup = function(e) {
    if (e.keyCode === 37) {
        isLeft = false;
    } else if (e.keyCode === 38) {
        isTop = false;
    } else if (e.keyCode === 39) {
        isRight = false;
    } else if (e.keyCode === 40) {
        isBottom = false;
    }  
}

//hero的移动
function heroMove() {
    var left = dHero.offsetLeft;
    var top = dHero.offsetTop;
    if (isLeft) {
        left -= 8;
        left = left<-33 ? -33 : left;
    }
    if (isTop) {
        top -= 8;
        top = top<0? 0 : top;
    }
    if (isRight) {
        left += 8;
        left = left>sw-33 ? sw-33 : left;
    }
    if (isBottom) {
        top += 8;
        top = top>sh-82 ? sh-82 : top
    }
    dHero.style.left = left + 'px';
    dHero.style.top = top + 'px';
}


//移动端 触屏事件

// 手指按下
dHero.ontouchstart = function(e) {
    //阻止默认  屏幕不会跟随鼠标晃动
    e.preventDefault();
    if (e.touches.length > 1) {
        return ;
    }
    //获取手指
    var touch = e.touches[0];
    var x = touch.pageX;
    var y = touch.pageY;
    var l = dHero.offsetLeft;
    var t = dHero.offsetTop;
    window.ontouchmove = function(e2) {
        var touch2 = e2.touches[0];
        dHero.style.left = touch2.pageX - x + l + 'px';
        dHero.style.top = touch2.pageY - y + t + 'px';
    }
}