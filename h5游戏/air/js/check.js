var score = 0; //得分
var pScore = document.getElementById("score");

function isCrash(a,b) {
    var l1 = a.offsetLeft;
    var t1 = a.offsetTop;
    var r1 = l1 + a.offsetWidth;
    var b1 = t1 + a.offsetHeight;

    var l2 = b.offsetLeft;
    var t2 = b.offsetTop;
    var r2 = l2 + b.offsetWidth;
    var b2 = t2 + b.offsetHeight;
    if (r2<l1 || b2<t1 || r1<l2 || b1<t2) {
        // 不碰撞
        return false;
    } else {
        // 碰撞
        return true;
    }
}


function check() {
    // 1. hero与敌机
    // 2. 子弹与敌机
    var es = dEnemy.children;
    var bs = dBullet.children;
    for(var i=0; i<es.length; i++) {
        var e = es[i];
        // 英雄与敌机
        if (isCrash(dHero, e)) {
            // gameover
            gameover();
        }
        // 子弹与敌机
        for (var j=0; j<bs.length; j++) {
            var b = bs[j];
            if (isCrash(e,b)) {
                // 1. 子弹消失
                dBullet.removeChild(b);
                // 2. 敌机消失
                dEnemy.removeChild(e);
                // 3. 加分
                score ++;
                pScore.innerHTML = "得分：" + score;
                // 4. 处理数据
                i --;
                break;
            }
        }
    }
}