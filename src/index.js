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

document.getElementById('sound-3').addEventListener('mouseover', init);