import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const formRef = document.querySelector('.form');
 const btnRef = document.querySelector('button');
  //  const delayRef = formRef.frstElementChild;
  //  const amountRef = btnRef.previousElementSibiling;
  
  const inputDate = {};
  let STORAGE_KEY = 'KEY';
  // let delay = 0;
  // let step = 0;
  // let amount = 0;

formRef.addEventListener("input", (evt) => {
  evt.preventDefault();
  inputDate[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputDate));
    });
   
   const saveDate = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    let  delay = Number(saveDate.delay);
    let  step = Number(saveDate.step);
    let amount = Number(saveDate.amount);
   console.log(delay);
   console.log(step);
   console.log(amount);

   btnRef.addEventListener("submit", inputDateRmove());

   for ( let i = 0; i < amount; i++) {
   let position = i + 1;
    delay = delay + i * step;
    createPromise(position, delay)
      // .then(({ position, delay }) => {
      //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // })
      // .catch(({ position, delay }) => {
      //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      // });
    
    }
   
    function inputDateRmove() {
      localStorage.removeItem(STORAGE_KEY);
     };

    function createPromise(position, delay) {

    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {

    setTimeout(() => {

    if (shouldResolve) {
      resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    } else {
      reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
   }  }, delay);
   
    })
  }

  // createPromise(position, delay)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });

  
    // promise.race(position, delay)
    // .then(({ position, delay }) => {
    //   Notify.success(`✅  {position: ${position}, delay: ${delay}}`);
    // })
    // .catch(({ position, delay }) => {
    //   Notify.failure(`❌ {position: ${position}, delay: ${delay}}`);
    // });

  


  
   
    

      // function createPromise(position, delay) {
      //   const shouldResolve = Math.random() > 0.3;
      //   if (shouldResolve) {
      //     // Fulfill
      //   } else {
      //     // Reject
      //   }
      // }
      // createPromise(position, delay)
      // .then(({ position, delay }) => {
      //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // })
      // .catch(({ position, delay }) => {
      //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      // });


  