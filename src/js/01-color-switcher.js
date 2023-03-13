
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener("click", () => {

  intervalId = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor();
    console.log(`colorChange:  ${getRandomHexColor()}`);
     startBtn.disabled = true;
     stopBtn.disabled = false;
        }, 1000);
        // startBtn.disabled = true;
    //  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    clearInterval(this.intervalId); 
    startBtn.disabled = false;
    stopBtn.disabled = true;
    });



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  
  // const container = document.createElement('div');
  // startBtn.before(container);

  bodyRef.style.display = 'flex'; 
  bodyRef.style.gap = '10px';
  bodyRef.style.justifyContent = 'center';
  bodyRef.style.alignItems = 'center';
  bodyRef.style.height = '600px';
  startBtn.style.fontSize = '40px';
  stopBtn.style.fontSize = '40px';
 