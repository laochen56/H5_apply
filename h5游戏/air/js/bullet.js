//子弹运动及创建

var dBullet = document.getElementById("bullet");

// 使用间隔
var space = 7;
var count = 0; //计数

//子弹运动
function bulletMove() {
    count ++;
    // 1. 子弹的创建
    if (count === space) {
        createBullet();
        count = 0;
    }
    // 2. 子弹的运动
    var bs = dBullet.children;
    for (var i=0; i<bs.length; i++) {
        var top = bs[i].offsetTop;
        if (top <= -14) {
            dBullet.removeChild(bs[i]);
            i-- ;
            continue;
        }
        bs[i].style.top = top - 9 + 'px';
    }
}

function createBullet() {
    var dHero = document.getElementById("hero");
    var d = document.createElement("div");
    d.className = "bullet";
    d.style.left = dHero.offsetLeft + 33 - 3 + 'px';
    d.style.top = dHero.offsetTop + 'px';
    dBullet.appendChild(d);
}