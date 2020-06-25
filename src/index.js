import "./styles/index.scss";
import "./styles/reset.scss";
// import anime from 'animejs/lib/anime.es.js';
// const anime = require('animejs');

document.addEventListener("keydown", (e) => {
    
        console.log(e)
           
        if (e.keyCode === 70) {
            let audio = document.getElementById("audio");
            audio.playbackRate = audio.playbackRate + 0.1;
            console.log(audio.playbackRate)

        } else if (e.keyCode === 83) {
           
            console.log(e.keycode)
            let audio = document.getElementById("audio");
            audio.playbackRate = audio.playbackRate - 0.1;
        }

})



function rain() {
    var canvas = document.getElementById('rain')
    canvas.className = 'rain'
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';


        var init = [];
        var maxParts = 1000;
        for (var a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 2,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 20
            })
        }

        var particles = [];
        for (var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
         
        }

        function move() {

            for (var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x += p.xs;
                p.y += p.ys;
                if (p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -20;
                }
            }
        }

       
        
        setInterval(draw, 30);
   

    }
};

function leaveRain() {
    document.getElementById('rain').className = 'hidden'
    document.getElementById('rain-text').className = 'hidden'
    let rain = document.getElementById('rainAudio');
    rain.currentTime = 0;
    rain.pause();

}

function rainSound() {
    document.getElementById('rain-text').className = 'rain-text'

    let rain = document.getElementById('rainAudio');
    rain.play();
}



document.getElementById('sound-3').addEventListener('mouseenter', rain);
document.getElementById('sound-3').addEventListener('mouseenter', rainSound);
document.getElementById('sound-3').addEventListener('mouseleave', leaveRain);


function ocean() {
    document.getElementById('ocean').className = "ocean"
    // let ocean = new Audio("pouring.mp3");
    let ocean = document.getElementById('oceanAudio');
    ocean.play();

}

function leaveOcean () {
    document.getElementById('ocean').className = "hidden"
    let ocean1 = document.getElementById('oceanAudio');
    ocean1.currentTime = 0;
    ocean1.pause();
    // document.getElementById("oceanAudio").currentTime = 0;
    // document.getElementById("oceanAudio").pause();

}

document.getElementById('sound-1').addEventListener('mouseenter', ocean);
document.getElementById('sound-1').addEventListener('mouseleave', leaveOcean);

function fire() {
    document.getElementById('fire-container').className= 'fire-container'
    document.getElementById('fire-text').className = 'fire-text'
    document.getElementById('fireAudio').play()
}

function leaveFire() {
    document.getElementById('fire-text').className = 'hidden'
    document.getElementById('fire-container').className = 'hidden'
    document.getElementById('fireAudio').currentTime = 0;
    document.getElementById('fireAudio').pause()

}

document.getElementById('sound-2').addEventListener('mouseenter', fire);
document.getElementById('sound-2').addEventListener('mouseleave', leaveFire);

function c() {
    document.getElementById("C").play()
}
function s1() {
    document.getElementById("S1").play()
}
function s2() {
    document.getElementById("S2").play()
}
function m() {
    document.getElementById("M").play()
}
function r() {
    document.getElementById("R").play()
}
function cKey() {
    document.getElementById("C").play()
}
function s1Key() {
    document.getElementById("S1").play()
}
function s2Key() {
    document.getElementById("S2").play()
}
function mKey() {
    document.getElementById("M").play()
}
function rKey() {
    document.getElementById("R").play()
}

document.getElementById("C-span").addEventListener('mouseover', c)
document.getElementById("S1-span").addEventListener('mouseover', s1)
document.getElementById("S2-span").addEventListener('mouseover', s2)
document.getElementById("M-span").addEventListener('mouseover', m)
document.getElementById("R-span").addEventListener('mouseover', r)

