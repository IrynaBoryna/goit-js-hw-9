
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
    position = i + 1;
    delay = delay + i * step;
     createPromise(position, delay)
    }
    

    function inputDateRmove() {
        
      localStorage.removeItem(STORAGE_KEY);
     };

    function createPromise(position, delay) {

    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

    if (shouldResolve) {
      resolve(console.log(`✅{position: ${position} , delay: ${delay}}`));
    } else {
      reject(console.log(`❌ {position: ${position} , delay: ${delay}}`));
   }  }, delay);
   
    })
    

     promise.race()
    .then(({ position , delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}`)
      });
   
    }

    
  


  