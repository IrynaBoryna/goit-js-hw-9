import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const formRef = document.querySelector('.form');
 const btnRef = document.querySelector('button');
  //  const delayRef = formRef.frstElementChild;
  //  const amountRef = btnRef.previousElementSibiling;
  
  let inputDate = {};
  let STORAGE_KEY = 'KEY';


formRef.addEventListener("input", (evt) => {
  evt.preventDefault();
  inputDate[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputDate));
    });
   
   const saveDate = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    let delay = Number(saveDate.delay);
    let step = Number(saveDate.step);
   let amount = Number(saveDate.amount);
   console.log(delay);
   console.log(step);
   console.log(amount);

   btnRef.addEventListener("submit", inputDateRmove());

   for ( let i = 0; i < amount; i++) {
   let position = i + 1;
    delay = delay + i * step;
     createPromise(position, delay)
    }
   
    function inputDateRmove() {
      localStorage.removeItem(STORAGE_KEY);
     };

    function createPromise(position, delay) {

    const shouldResolve = Math.random() > 0.3;
    return promise = new Promise((resolve, reject) => {

    setTimeout(() => {

    if (shouldResolve) {
      resolve(Notify.success(`✅  {position: ${position}, delay: ${delay}}`));
    } else {
      reject(Notify.failure(`❌ {position: ${position}, delay: ${delay}}`));
   }  }, delay);
   
    })
  
    promise.race(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅  {position: ${position}, delay: ${delay}}`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ {position: ${position}, delay: ${delay}}`);
    });

  }


  // let  positions = [];
  // const promises = positions.map(createPromise) ;
  // console.log(promises);
    

    //  promises.race(positions)
    // .then(({ position , delay }) => {
    //   Notify.success(`✅ Fulfilled promise ${position} in ${delay}`);
    //   })
    //   .catch(({ position, delay }) => {
    //     Notify.failure(`❌ Rejected promise ${position} in ${delay}`)
    //   });
   
    

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


  