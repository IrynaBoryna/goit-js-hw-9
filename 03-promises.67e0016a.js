const e=document.querySelector(".form"),o=document.querySelector("button");let t={};e.addEventListener("input",(e=>{e.preventDefault(),t[e.target.name]=e.target.value,localStorage.setItem("KEY",JSON.stringify(t))}));const n=JSON.parse(localStorage.getItem("KEY"));let l=Number(n.delay),i=Number(n.step),s=Number(n.amount);console.log(l),console.log(i),console.log(s);for(let e=0;e<s;e++)position=e+1,l+=e*i,a(position,l),r();function r(){localStorage.removeItem("KEY")}function a(e,o){const t=Math.random()>.3;new Promise(((n,l)=>{setTimeout((()=>{t?n(console.log(`✅{position: ${e} , delay: ${o}}`)):l(console.log(`❌ {position: ${e} , delay: ${o}}`))}),o)})).race([]).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}`)}))}o.addEventListener("submit",r());
//# sourceMappingURL=03-promises.67e0016a.js.map
