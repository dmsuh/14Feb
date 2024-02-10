/* https://greensock.com/gsap */
TweenLite.set("#petals")
TweenLite.set("img", {xPercent: "-50%", yPercent: "-50%"})

var total = 100;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    data = Math.floor(Math.random() * 3)
    console.log(data)
    if (data === 0) {
        TweenLite.set(Div, {attr: {class: 'dot'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    } else if (data === 1) {
        TweenLite.set(Div, {attr: {class: 'dot1'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
        warp.appendChild(Div);
        animm(Div);
    } else {
        TweenLite.set(Div, {attr: {class: 'dot2'}, x: R(0, w), y: R(-200, -150), z: R(-200, 200)});
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

function R(min, max) {
    return min + Math.random() * (max - min)
};
var title = document.getElementById("title")
title.innerText = 'Размышления'
setTimeout(() => {
    title.innerText = 'Любимая Полина, с 14 Февраля!'
}, 22000)
/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Я тут решил, что простые валентинки уже далеко в прошлом, хоть они довольно и романтичны.' +
    ' Но как говорится живем уже не в том веке, когда они были популярны, ведь уже 21 век. И я считаю валентинки должны соответствовать этому времени. И поэтому пишу тебе',
        'Желаю всего наилучшего тебе, Полиночка, чтобы не грустила по чем зря, чтобы все хорошее лишь прилипало к тебе. А неудачное отваливалось. Желаю также несметной любви, которая не будет угаснет со временем.' +
        ' А также насколько ты могла заметить, я называл тебя по разному и милая и любимая, но 3 заветных слова так и не говорил, не по тому что стесняюсь а просто их оставил для особого дня, и он наступил!!!' +
        ''],
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


