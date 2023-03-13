// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// let currentDate = null;


import { Report } from 'notiflix/build/notiflix-report-aio';
class ReversCount {
    #intervalID = null;
    #onChangeCallback  = ()  => {};

    constructor ({onChange} = {})  {
        if(onChange) {
            this.#onChangeCallback = onChange;
        }
    };

    start (currentDate) {
        this.#intervalID = setInterval (() => {
           const delta = new Date(currentDate).getTime() - new Date().getTime();
            // console.log(new Date().getTime());
            // console.log (new Date(currentDate).getTime());
            // console.log(delta);
            if(delta < 0) {
                this.stop( )
            } else {
          const days = Math.floor(delta /(1000 * 60 * 60 * 24));
          const hours = Math.floor((delta %( 1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
             const minutes = Math.floor((delta % (1000 * 60 * 60 ))/ (1000 * 60));
             const seconds = Math.floor((delta % (1000 * 60)) / 1000);
            
            this.#onChangeCallback({
                days: ReversCount.formatValue(days),
                 hours: ReversCount.formatValue(hours),
                  minutes: ReversCount.formatValue(minutes),
                  seconds: ReversCount.formatValue(seconds),
            }); 
    }}, 1000)}
    
    stop () { 
        if(new Date(currentDate).getTime() - new Date().getTime() <= 0 || startBtn.addEventListener('click', {})) {
            clearInterval(this.#intervalID); 
        }
            };

    static formatValue(value) {
        return value.toString().padStart(2, '0');
    };
}

 const reversCount = new ReversCount({onChange: onReversCountChange});

 const myInput = document.querySelector('input#datetime-picker');
 const startBtn = document.querySelector('button[data-start]');
 const daysRef = document.querySelector('[data-days]');
 const hoursRef = document.querySelector('[data-hours]');
 const minutesRef = document.querySelector('[data-minutes]');
 const secondsRef = document.querySelector('[data-seconds]');
 

const fp = flatpickr(myInput, {
       enableTime: true,
       time_24hr: true,
       defaultDate: new Date(),
       minuteIncrement: 1,
    
       onClose(selectedDates) { 
        if(new Date(selectedDates).getTime() <= new Date().getTime()) {
            Report.failure("Please choose a date in the future");
            startBtn.disabled = true;
            // reversCount.stop();
       } else {
            startBtn.disabled = false;
            console.log(selectedDates);
            reversCount.start(selectedDates);
       }
}
});


function onReversCountChange({ days, hours, minutes, seconds }) {
    daysRef.textContent = days;
 hoursRef.textContent = hours;
 minutesRef.textContent = minutes;
 secondsRef.textContent = seconds;
 console.log({ days, hours, minutes, seconds })
};



const containerBig = document.querySelector('.timer');

containerBig.style.display = 'flex'; 
containerBig.style.gap = '10px';
containerBig.style.justifyContent = 'center';
containerBig.style.alignItems = 'center';
containerBig.style.fontSize = "40px";

// const containerSmall = document.querySelectorAll('.field');

// containerSmall.style.display = 'flex'; 
// containerSmall.style.flexDirection = 'column';
// containerSmall.style.gap = '10px';
// containerSmall.style.justifyContent = 'center';
// containerSmall.style.alignItems = 'center';


const numberD = document.querySelector('span[data-days]');

numberD.style.color = 'red'; 
numberD.style.fontWeight = '700'; 

const numberH= document.querySelector('span[data-hours]');

numberH.style.color = 'red'; 
numberH.style.fontWeight = '700';

const numberM = document.querySelector('span[data-minutes]');

numberM.style.color = 'red'; 
numberM.style.fontWeight = '700'; 

const numberS = document.querySelector('span[data-seconds]');

numberS.style.color = 'red'; 
numberS.style.fontWeight = '700'; 
// const fp = flatpickr(myInput, {options});

// function onClose(selectedDates) { 
//         if(new Date(selectedDates).getTime() <= new Date().getTime()) {
//             window.alert("Please choose a date in the future");
//         startBtn.disabled = true;
//     } else {
//         startBtn.disabled = false;
//             console.log(selectedDates);
       
//     }
// }









// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }

    
// //   function convertMs(ms) {
// //     // Number of milliseconds per unit of time
// //     const second = 1000;
// //     const minute = 1000 * 60;
// //     const hour = 1000 * 60 * 60;
// //     const day = 1000 * 60 * 60 * 24;
  
    
// //     const days = Math.floor(delta / 1000 * 60 * 60 * 24);
// //     const hours = Math.floor((delta % 1000 * 60 * 60 * 24) / 1000 * 60 * 60);
// //     const minutes = Math.floor(((delta % 1000 * 60 * 60 * 24) % 1000 * 60 * 60) / 1000 * 60);
// //     const seconds = Math.floor((((delta % 1000 * 60 * 60 * 24) % 1000 * 60 * 60) % 1000 * 60) / 1000);
  
// //     return { days, hours, minutes, seconds };
// //   }
