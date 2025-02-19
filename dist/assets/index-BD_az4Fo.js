const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-D1IFMJyj.js","assets/react-V8IiPZyx.js","assets/cookie-BX9QSSmL.js","assets/prop-types-D0pSn4ZB.js","assets/react-router-CKXxbML7.js","assets/react-dom-b-nR2FO5.js","assets/scheduler-BNqrtbQi.js","assets/home-BAk0M7ox.css","assets/about-B02tRhzq.js","assets/about-DjURi_mO.css","assets/fieldworks-CkZ-Y4Aa.js","assets/fieldworks-BbwgsnaD.css","assets/fieldrecordings-B8lou_Pv.js","assets/eventemitter3-DMllpG5g.js","assets/react-map-gl-mKWdT8YR.js","assets/mapbox-gl--tciIPl5.js","assets/mapbox-gl-CYq10Fru.css","assets/react-icons-Bl3RMTbh.js","assets/maplibre-contour-CXWQAzWF.js","assets/fieldrecordings-Sjp9JYEK.css","assets/Resources-CzL3i4Sb.js","assets/Resources-XPY7Ll1G.css"])))=>i.map(i=>d[i]);
import{j as e,a as i,R as j}from"./react-V8IiPZyx.js";import{R as w}from"./react-dom-b-nR2FO5.js";import{_ as m}from"./react-map-gl-mKWdT8YR.js";import{P as y}from"./prop-types-D0pSn4ZB.js";import{u as _,a as R,R as E,b as u,B as k}from"./react-router-CKXxbML7.js";/* empty css                  */import"./cookie-BX9QSSmL.js";import"./scheduler-BNqrtbQi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const n=[{title:"Home",route:"/",color:"#ffffff",icon:"ac_unit"},{title:"Field Recordings",route:"/fieldrecordings",color:"#ffff00",icon:"graphic_eq"},{title:"Field Works",route:"/fieldworks",color:"#ff00ff",icon:"asterisk"},{title:"Resources",route:"/resources",color:"#000000",icon:"bookmark"},{title:"About",route:"/about",color:"#00ffff",icon:"info"}],h={"#ffffff":{track:"#dddddd",thumb:"#bbbbbb"},"#ffff00":{track:"#cccc00",thumb:"#aaaa00"},"#ff00ff":{track:"#990099",thumb:"#770077"},"#000000":{track:"#333333",thumb:"#222222"},"#00ffff":{track:"#009999",thumb:"#007777"}};function g(){const[l,s]=i.useState(window.innerWidth);return i.useEffect(()=>{const c=()=>s(window.innerWidth);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),l}function x({children:l}){var r,d;const s=_(),c=R(),a=g(),o=n.findIndex(t=>t.route===s.pathname);return a<768?e.jsxs("div",{className:"mobile-layout",children:[e.jsx("div",{className:"mobile-nav",children:n.map((t,p)=>{const f=p===o,b=t.route==="/resources"?"#ffffff":"#000000";return e.jsx("div",{className:`mobile-nav-item ${f?"active":""}`,style:{backgroundColor:t.color},onClick:()=>{f||c(t.route)},children:e.jsx("span",{className:"material-symbols-outlined",style:{color:b,fontSize:"24px"},children:t.icon})},t.route)})}),e.jsx("div",{className:"mobile-content",style:{backgroundColor:((r=n[o])==null?void 0:r.color)||"#ffffff",color:((d=n[o])==null?void 0:d.route)==="/resources"?"#ffffff":"inherit"},children:e.jsx("div",{className:"scrollable-content",style:{padding:o===0?0:"20px","--scrollbar-track":n[o]?h[n[o].color].track:"#222","--scrollbar-thumb":n[o]?h[n[o].color].thumb:"#555"},children:l})})]}):e.jsx("div",{className:"layout-container",children:n.map((t,p)=>{const f=p===o,b=f?"section expanded":"section narrow",v=t.route==="/resources"?"#ffffff":"#000000";return e.jsx("div",{className:b,style:{backgroundColor:t.color},onClick:()=>{f||c(t.route)},children:f?e.jsx("div",{className:"scrollable-content",style:{padding:o===0?0:"20px","--scrollbar-track":h[t.color].track,"--scrollbar-thumb":h[t.color].thumb,color:t.route==="/resources"?"#ffffff":"inherit"},children:l}):e.jsx("div",{className:"icon-container",children:e.jsx("span",{className:"material-symbols-outlined",style:{color:v,fontSize:"24px"},children:t.icon})})},t.route)})})}x.propTypes={children:y.node.isRequired};const L=()=>{const[l,s]=i.useState(!1);i.useEffect(()=>{const a=()=>{window.pageYOffset>20?s(!0):s(!1)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]);const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx("button",{onClick:c,id:"scrollToTopBtn",className:`scroll-to-top ${l?"visible":""}`,title:"Go to top",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",children:e.jsx("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"})})})},N=i.lazy(()=>m(()=>import("./home-D1IFMJyj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),T=i.lazy(()=>m(()=>import("./about-B02tRhzq.js"),__vite__mapDeps([8,1,2,9]))),O=i.lazy(()=>m(()=>import("./fieldworks-CkZ-Y4Aa.js"),__vite__mapDeps([10,1,2,11]))),C=i.lazy(()=>m(()=>import("./fieldrecordings-B8lou_Pv.js"),__vite__mapDeps([12,1,2,13,3,14,5,6,15,16,17,18,19]))),P=i.lazy(()=>m(()=>import("./Resources-CzL3i4Sb.js"),__vite__mapDeps([20,1,2,21]))),A=()=>e.jsxs("div",{children:[e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Cargando aplicación..."}),children:e.jsx(x,{children:e.jsxs(E,{children:[e.jsx(u,{path:"/",element:e.jsx(N,{})}),e.jsx(u,{path:"/fieldrecordings",element:e.jsx(C,{})}),e.jsx(u,{path:"/fieldworks",element:e.jsx(O,{})}),e.jsx(u,{path:"/resources",element:e.jsx(P,{})}),e.jsx(u,{path:"/about",element:e.jsx(T,{})})]})})}),e.jsx(L,{})]});w.createRoot(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(k,{children:e.jsx(A,{})})}));
