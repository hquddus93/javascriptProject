import "./styles/index.scss";
import "./styles/reset.scss";
import "./styles/nav.scss";


document.addEventListener("keydown", (e) => {
   
        if (e.key === "v") {
           
            let audio = document.getElementById("vibrateAudio");
            (audio.play());
           

        } else if (e.key === "c") {
            document.getElementById("C").play();
            
        }
        else if (e.key === "a") {
            document.getElementById("S1").play();

        }
        else if (e.key === "s") {
            document.getElementById("S2").play();
        }
        else if (e.key === "m") {
            document.getElementById("M").play();
        } 
        else if (e.key === "r") {
            document.getElementById("R").play();
        } 
        else if (e.key === "p") {
            document.getElementById("beep1Audio").play();
        } 
        else if (e.key === "g") {
            document.getElementById("beep2Audio").play();
        } 
        else if (e.key === "l") {
            document.getElementById("beep3Audio").play();
        }
        else if (e.key === "b") {
            document.getElementById("beep4Audio").play();
        }
        else if (e.key === "w") {
            document.getElementById("oceanAudio").play();
        }
        else if (e.key === "f") {
            document.getElementById("fireAudio").play();
        }
        else if (e.key === "d") {
            document.getElementById("rainAudio").play();
        }
        else if (e.key === "o") {
            document.getElementById("bounce-top-audio").play();
        }
        else if (e.key === "y") {
            document.getElementById("blinkAudio").play();
        }
        else if (e.key === "h") {
            document.getElementById("heartbeatAudio").play();
        }
        else if (e.key === "i") {
            document.getElementById("ice").play();
        }
        else if (e.key === "j") {
            document.getElementById("coins").play();
        }
        else if (e.key === "x") {
            document.getElementById("camera2").play();
        }
        else if (e.key === "z") {
            document.getElementById("whoosh").play();
        }
        else if (e.key === "u") {
            document.getElementById("forwardAudio").play();
        }
        else if (e.key === "t") {
            document.getElementById("backwardAudio").play();
        }
        else if (e.key === "q") {
            document.getElementById("switch1Audio").play();
        }
        else if (e.key === "k") {
            document.getElementById("switch2Audio").play();
        }
        else if (e.key === "n") {
            document.getElementById("switch3Audio").play();
        }

})

document.addEventListener("keyup", (e) => {

    if (e.key === "v") {
        let audio = document.getElementById("vibrateAudio");
        audio.currentTime = 0;
        audio.pause();

    } else if (e.key === "c") {
        document.getElementById("C").currentTime = 0;
        document.getElementById("C").pause();
        
    } else if (e.key === "a") {
        document.getElementById("S1").currentTime = 0;
        document.getElementById("S1").pause();

    } else if (e.key === "s") {
        document.getElementById("S2").currentTime = 0;
        document.getElementById("S2").pause();

    } else if (e.key === "m") {
        document.getElementById("M").currentTime = 0;
        document.getElementById("M").pause();

    } else if (e.key === "r") {
        document.getElementById("R").currentTime = 0;
        document.getElementById("R").pause();

    } else if (e.key === "w") {
        document.getElementById("oceanAudio").currentTime = 0;
        document.getElementById("oceanAudio").pause();

    } else if (e.key === "f") {
        document.getElementById("fireAudio").currentTime = 0;
        document.getElementById("fireAudio").pause();

    } else if (e.key === "d") {
        document.getElementById("rainAudio").currentTime = 0;
        document.getElementById("rainAudio").pause();

    }
    else if (e.key === "o") {
        document.getElementById("bounce-top-audio").currentTime = 0;
        document.getElementById("bounce-top-audio").pause();

    }
    else if (e.key === "y") {
        document.getElementById("blinkAudio").currentTime = 0;
        document.getElementById("blinkAudio").pause();

    }
    else if (e.key === "h") {
        document.getElementById("heartbeatAudio").currentTime = 0;
        document.getElementById("heartbeatAudio").pause();

    } else if (e.key === "i") {
        document.getElementById("ice").currentTime = 0;
        document.getElementById("ice").pause();

    } else if (e.key === "j") {
        document.getElementById("coins").currentTime = 0;
        document.getElementById("coins").pause();

    } else if (e.key === "x") {
        document.getElementById("camera2").currentTime = 0;
        document.getElementById("camera2").pause();

    } else if (e.key === "z") {
        document.getElementById("whoosh").currentTime = 0;
        document.getElementById("whoosh").pause();

    }

})



function rain() {
    setTimeout( () => {var canvas = document.getElementById('rain')
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
    }}, 200)
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
    rain.pause(100);
    rain.play();
}


document.getElementById('sound-3').addEventListener('mouseenter', rain);
document.getElementById('sound-3').addEventListener('mouseenter', rainSound);
document.getElementById('sound-3').addEventListener('mouseleave', leaveRain);


function ocean() {
    document.getElementById('ocean').className = "ocean"
    let ocean = document.getElementById('oceanAudio');
    ocean.play();

}

function leaveOcean () {
    document.getElementById('ocean').className = "hidden"
    let ocean1 = document.getElementById('oceanAudio');
    ocean1.currentTime = 0;
    ocean1.pause();

}

document.getElementById('sound-1').addEventListener('mouseenter', ocean);
document.getElementById('sound-1').addEventListener('mouseleave', leaveOcean);

function fire() {
    document.getElementById('fire').className= 'fire'
    // document.getElementById('fire-text').className = 'fire-text'
    document.getElementById('fireAudio').play()
}

function leaveFire() {
    document.getElementById('fire').className = 'hidden'
    // document.getElementById('fire-container').className = 'hidden'
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


document.getElementById("C-span").addEventListener('mouseover', c)
document.getElementById("S1-span").addEventListener('mouseover', s1)
document.getElementById("S2-span").addEventListener('mouseover', s2)
document.getElementById("M-span").addEventListener('mouseover', m)
document.getElementById("R-span").addEventListener('mouseover', r)

function portfolio() {
    document.getElementById('beep1Audio').play()
}
function github() {
    document.getElementById('beep2Audio').play()

}
function linkedin() {
    document.getElementById('beep3Audio').play()

}
function angellist() {
    document.getElementById('beep4Audio').play()

}

document.getElementById("portfolio").addEventListener('mouseover', portfolio)
document.getElementById("github").addEventListener('mouseover', github)
document.getElementById("linkedin").addEventListener('mouseover', linkedin)
document.getElementById("angellist").addEventListener('mouseover', angellist)

function focus() {
    document.getElementById("ice").play()
    document.getElementById("focus").className = "focus"
}
function focusLeave() {
    document.getElementById("ice").currentTime = 0;
    document.getElementById("ice").pause();
    document.getElementById("focus").className = "hidden"
}
document.getElementById("other-1").addEventListener('mouseover', focus)
document.getElementById("other-1").addEventListener('mouseleave', focusLeave)

function expand() {
    document.getElementById("whoosh").play()
    document.getElementById("expand").className = "expand"
}
function expandLeave() {
    document.getElementById("whoosh").currentTime = 0;
    document.getElementById("whoosh").pause();
    document.getElementById("expand").className = "hidden"
}
document.getElementById("other-2").addEventListener('mouseover', expand)
document.getElementById("other-2").addEventListener('mouseleave', expandLeave)

function tracking() {
    document.getElementById("coins").play()
    document.getElementById("tracking").className = "tracking"
}
function trackingLeave() {
    document.getElementById("coins").currentTime = 0;
    document.getElementById("coins").pause();
    document.getElementById("tracking").className = "hidden"
}
document.getElementById("other-3").addEventListener('mouseover', tracking)
document.getElementById("other-3").addEventListener('mouseleave', trackingLeave)

function flicker() {
    document.getElementById("camera2").play()
    document.getElementById("flicker").className = "flicker"
}
function flickerLeave() {
    document.getElementById("camera2").currentTime = 0;
    document.getElementById("camera2").pause();
    document.getElementById("flicker").className = "hidden"
    
}
document.getElementById("other-4").addEventListener('mouseover', flicker)
document.getElementById("other-4").addEventListener('mouseleave', flickerLeave)



function vibrate() {
    document.getElementById('third-1').classList.add("vibrate");
    document.getElementById("vibrate-text").classList.remove('hidden')
    // document.getElementById('vibrateAudio').vo;
    document.getElementById('vibrateAudio').play();
}

function vibrateLeave() {
    document.getElementById('third-1').classList.remove("vibrate")
    document.getElementById("vibrate-text").classList.add('hidden')
    document.getElementById('vibrateAudio').currentTime = 0
    document.getElementById('vibrateAudio').pause()
}
document.getElementById("third-1").addEventListener('mouseover', vibrate)
document.getElementById("third-1").addEventListener('mouseleave', vibrateLeave)

function bouncetop() {
    document.getElementById('third-2').classList.add("bounce-top");
    document.getElementById("bounce-top-text").classList.remove('hidden')
    document.getElementById('bounce-top-audio').play();
}

function bouncetopLeave() {
    document.getElementById('third-2').classList.remove("bounce-top")
    document.getElementById("bounce-top-text").classList.add('hidden')
    document.getElementById('bounce-top-audio').currentTime = 0
    document.getElementById('bounce-top-audio').pause()
}
document.getElementById("third-2").addEventListener('mouseover', bouncetop)
document.getElementById("third-2").addEventListener('mouseleave', bouncetopLeave)

function blink() {
    document.getElementById('third-3').classList.add("blink");
    document.getElementById("blink-text").classList.remove('hidden')
    document.getElementById('blinkAudio').play();
}

function blinkLeave() {
    document.getElementById('third-3').classList.remove("blink")
    document.getElementById("blink-text").classList.add('hidden')
    document.getElementById('blinkAudio').currentTime = 0
    document.getElementById('blinkAudio').pause()
}
document.getElementById("third-3").addEventListener('mouseover', blink)
document.getElementById("third-3").addEventListener('mouseleave', blinkLeave)

function heartbeat() {
    document.getElementById('third-4').classList.add("heartbeat");
    document.getElementById("heartbeat-text").classList.remove('hidden')
    document.getElementById('heartbeatAudio').play();
}

function heartbeatLeave() {
    document.getElementById('third-4').classList.remove("heartbeat")
    document.getElementById("heartbeat-text").classList.add('hidden')
    document.getElementById('heartbeatAudio').currentTime = 0
    document.getElementById('heartbeatAudio').pause()
}
document.getElementById("third-4").addEventListener('mouseover', heartbeat)
document.getElementById("third-4").addEventListener('mouseleave', heartbeatLeave)

function handleClickNext(e) {
   
    document.getElementById('forwardAudio').play()

    if (e.target.parentElement.parentElement.id === 'page-1') {
       
        document.getElementById('page-1').className='hidden'
        document.getElementById('page-2').className='third-section'

       
    } 
    else if (e.target.parentElement.parentElement.id === 'page-2') {
       
        document.getElementById('page-2').className='hidden'
        document.getElementById('page-3').className='other-demos'

    }
    else if (e.target.parentElement.parentElement.id === 'page-3') {
       
        document.getElementById('page-3').className='hidden'
        document.getElementById('page-4').className='keys'

    } 
    else if (e.target.parentElement.parentElement.id === 'page-4') {
       
        document.getElementById('page-4').className='hidden'
        document.getElementById('page-1').className='sound-animations'
        document.getElementById('forwardAudio').play()

    } 
}

document.getElementById('next-button').addEventListener('click', handleClickNext)
document.getElementById('next-button-2').addEventListener('click', handleClickNext)
document.getElementById('next-button-3').addEventListener('click', handleClickNext)
document.getElementById('next-button-4').addEventListener('click', handleClickNext)

function handleClickBack(e) {

    document.getElementById('backwardAudio').play()

    if (e.target.parentElement.parentElement.id === 'page-1') {
       
        document.getElementById('page-1').className = 'hidden'
        document.getElementById('page-4').className = 'keys2'
    }
    else if (e.target.parentElement.parentElement.id === 'page-2') {
        document.getElementById('page-2').className = 'hidden'
        document.getElementById('page-1').className = 'sound-animations2'
    }
    else if (e.target.parentElement.parentElement.id === 'page-3') {
        document.getElementById('page-3').className = 'hidden'
        document.getElementById('page-2').className = 'third-section2'
    }
    else if (e.target.parentElement.parentElement.id === 'page-4') {
        document.getElementById('page-4').className = 'hidden'
        document.getElementById('page-3').className = 'other-demos2'
    }
}

document.getElementById('back-button-1').addEventListener('click', handleClickBack)
document.getElementById('back-button-2').addEventListener('click', handleClickBack)
document.getElementById('back-button-3').addEventListener('click', handleClickBack)
document.getElementById('back-button-4').addEventListener('click', handleClickBack)


function githubFooter() {
    document.getElementById('switch1Audio').play()

}
function linkedinFooter() {
    document.getElementById('switch2Audio').play()

}
function angellistFooter() {
    document.getElementById('switch3Audio').play()

}


document.getElementById("switch1").addEventListener('mouseover', githubFooter)
document.getElementById("switch2").addEventListener('mouseover', linkedinFooter)
document.getElementById("switch3").addEventListener('mouseover', angellistFooter)