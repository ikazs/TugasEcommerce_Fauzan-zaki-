!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(Depicter,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{dpcLottie:()=>o});const o={component:e=>{const{className:t="dpc-lottie",composer:o,src:n,loop:r=!0,speed:i=1,direction:l="forward",delay:d=0,playOnHover:a=!1,pauseOnSlideChange:p=!1,layer:s,onReady:c}=e,u=document.createElement("div");u.classList.add(t);let y=null,f=null,v=!0;const m=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return f&&s.holder.active&&"leaving"!==s.holder.status&&s.bpVisible?(v&&e&&d?setTimeout((()=>{v=!1,f?.play()}),d):f?.play(),f):null},b=e=>{e?f?.pause():(f?.stop(),v=!0)};return o.dependencyManager.loadScript("https://cdn.jsdelivr.net/npm/lottie-web/build/player/lottie.min.js").then((()=>{y=window.lottie,y&&(f=y.loadAnimation({container:u,renderer:"svg",loop:r,autoplay:!1,path:n}),f.stop(),v=!0,f.setSpeed(i),f.setDirection("forward"===l?1:-1),a?(u.addEventListener("mouseover",(()=>{m(!0)})),u.addEventListener("mouseout",(()=>{b(!0)}))):m()),c()})),s.holder.on("activated",m,s),s.holder.on("deactivated",(()=>b(p)),s),s.on("visibilityChange",((e,t,o)=>{o?o&&b(p):m()})),u},async:!0,pureScript:!0};return t})()));