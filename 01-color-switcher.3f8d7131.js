const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let o=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}d.disabled=!0,t.addEventListener("click",(()=>{e.style.backgroundColor=l(),o=setInterval((()=>{e.style.backgroundColor=l()}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearInterval(o),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3f8d7131.js.map
