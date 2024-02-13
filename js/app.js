/* https://greensock.com/gsap */
TweenLite.set("#petals")
TweenLite.set("img", {xPercent: "-50%", yPercent: "-50%"})

var total = 128;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    data = Math.floor(Math.random() * 4)
    console.log(data)
    if (data === 0) {
        TweenLite.set(Div, {attr: {class: 'dot'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    } else if (data === 1) {
        TweenLite.set(Div, {attr: {class: 'dot1'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    } else if (data === 2) {
        TweenLite.set(Div, {attr: {class: 'dot2'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    }else {
        TweenLite.set(Div, {attr: {class: 'dot3'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    }

}

function animm(elm) {
    TweenMax.to(elm, R(6, 15), {y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15});
    TweenMax.to(elm, R(4, 8), {x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut});
    TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
    });
};

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function R(min, max) {
    return min + Math.random() * (max - min)
};
var title = document.getElementById("title")
title.innerText = 'Размышления'
setTimeout(() => {
    title.innerText = 'Любимая Полина, с 14 Февраля!'
}, 30000)
/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Я тут решил, что простые валентинки уже далеко в прошлом, хоть они довольно и романтичны.' +
    ' Но как говорится живем уже не в том веке, когда они были популярны, ведь уже 21 век. И я считаю валентинки должны соответствовать этому времени. И поэтому пишу тебе',
        'В жизнь ворвалась в мою, довольно быстро. Я даже не знал порой, что так могу кем-то заинтересоваться. Често не верил, что найду кого-то ' +
        'настолько близкого, как ты, Полиночка. Не знаю почему, но ты себя сравниваешь с кем-то. Ты идеальна для меня. И замены тебе нет и не будет!!!'],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 10,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function () {
        setTimeout(() => {
            var message = document.getElementById("message")
            var chest = document.getElementById("chest")
            chest.style.display = 'block'
            message.style.display = 'block'
            chest.style.animation = 'card 5s linear 1s forwards';
            message.style.animation = 'card 3s linear 2s forwards';
        }, 3000)
        setTimeout(() => {
            var author = document.getElementById("author");
            author.style.display = 'block'
            author.style.animation = 'card 5s linear 2s forwards';
        }, 5000)
    }
});


