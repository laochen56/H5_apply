// 敌机的创建于运动
var dEnemy = document.getElementById("enemy");

//通过概率来限制敌机的创建与游戏难度
var diff = 120; //难度系数

//敌机运动
function enemyMove() {
    // 1. 敌机的创建
    if (rand(0,diff) <= 10) {
        createEnemy()
    }
    // 2. 敌机的运动
    var es = dEnemy.children;
    for (var i=0; i<es.length; i++) {
        var e = es[i];
        if (e.offsetTop > sh) {
            // 飞出了屏幕，需要删掉
            dEnemy.removeChild(e);
            i --;  //防止漏掉元素
            continue;
        }
        e.style.top = e.offsetTop + e.speed + 'px';
    }
}

//创建敌机
function createEnemy() {
    var d = document.createElement("div");
    d.className = "enemy";
    d.style.left = rand(0,sw-38) + 'px';
    d.speed = rand(3,8);
    dEnemy.appendChild(d);
}