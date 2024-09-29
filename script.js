var timer = 60;
var score = 0;
var newHit;

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function makeBubble() {
    var clutter = "";

    for (let i = 1; i < 199; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}

function Timer() {
    const interval = setInterval(dicreaseTime, 1000);

    function dicreaseTime() {
        if (timer >= 0) {
            document.querySelector("#time").textContent = timer--;
        } else {
            clearInterval(interval);
            document.querySelector("#score").textContent = 0;
            document.querySelector("#hit").textContent = 0;
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over<br>Your Score: ${score}</h1>`;
        }
    }

}

function makeHit() {
    newHit = Math.floor(Math.random() * 10);

    document.querySelector("#hit").textContent = newHit;
}

function clickItem() {
    document.querySelector(".pbtm").addEventListener('click', function (dets) {
        let click = Number(dets.target.textContent);
        if (click === newHit) {
            increaseScore();
            makeBubble();
            makeHit();
        }
    })
}

makeBubble();
Timer();
makeHit();
clickItem();