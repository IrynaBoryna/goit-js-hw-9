const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),l=document.querySelector("body");let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(()=>{n=setInterval((()=>{l.style.backgroundColor=o(),console.log(`colorChange:  ${o()}`),e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1,t.disabled=!0})),l.style.display="flex",l.style.gap="10px",l.style.justifyContent="center",l.style.alignItems="center",l.style.height="600px",e.style.fontSize="40px",t.style.fontSize="40px";
//# sourceMappingURL=01-color-switcher.f9e3abf9.js.map