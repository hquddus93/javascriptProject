<h1>CSSMR</h1>

<a href="https://hquddus93.github.io/CSSMR/">Live Link</a>

<h3>Description</h3>
<p>CSSMR is an interactive webiste built using CSS, HTML, and Vanilla JavaScript to bring fun and soothing audio and visual effects to users. Users can hover over and click items all over the page to initiate the audio/visual effects. Users can also press keys to play the corresponding sounds.</p>

![Alt Text](https://media.giphy.com/media/IbrVzPiDApvAtaqR0F/giphy.gif)

<p>Users can switch between panes to see all the effects CSSMR has to offer.</p>

<h3>Technical Challenges</h3>
<p>CSSMR utilizes HTML5 audio tags to play sounds either on hover or on keypress. This was acheived using 'mouseenter' and 'keypress' event listeners. </p>

```
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
```

<p>Animations were achieved using CSS animations and keyframes. </p>

```
@keyframes focus {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
   20% {
    filter: blur(8px);
    opacity: 0.3;
  }
   40% {
    filter: blur(6px);
    opacity: 0.5;
  }
   60% {
    filter: blur(4px);
    opacity: 0.7;
  }
  
   80% {
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
```