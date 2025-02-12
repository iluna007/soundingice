import{g as T,r as x,j as t}from"./index-DXde4mY0.js";import{P as c}from"./index-B9cCmvKD.js";var P={exports:{}},F;function S(){return F||(F=1,function(n){var _=Object.prototype.hasOwnProperty,p="~";function y(){}Object.create&&(y.prototype=Object.create(null),new y().__proto__||(p=!1));function u(a,r,i){this.fn=a,this.context=r,this.once=i||!1}function w(a,r,i,o,v){if(typeof i!="function")throw new TypeError("The listener must be a function");var f=new u(i,o||a,v),l=p?p+r:r;return a._events[l]?a._events[l].fn?a._events[l]=[a._events[l],f]:a._events[l].push(f):(a._events[l]=f,a._eventsCount++),a}function j(a,r){--a._eventsCount===0?a._events=new y:delete a._events[r]}function m(){this._events=new y,this._eventsCount=0}m.prototype.eventNames=function(){var r=[],i,o;if(this._eventsCount===0)return r;for(o in i=this._events)_.call(i,o)&&r.push(p?o.slice(1):o);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(i)):r},m.prototype.listeners=function(r){var i=p?p+r:r,o=this._events[i];if(!o)return[];if(o.fn)return[o.fn];for(var v=0,f=o.length,l=new Array(f);v<f;v++)l[v]=o[v].fn;return l},m.prototype.listenerCount=function(r){var i=p?p+r:r,o=this._events[i];return o?o.fn?1:o.length:0},m.prototype.emit=function(r,i,o,v,f,l){var g=p?p+r:r;if(!this._events[g])return!1;var s=this._events[g],e=arguments.length,h,d;if(s.fn){switch(s.once&&this.removeListener(r,s.fn,void 0,!0),e){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,i),!0;case 3:return s.fn.call(s.context,i,o),!0;case 4:return s.fn.call(s.context,i,o,v),!0;case 5:return s.fn.call(s.context,i,o,v,f),!0;case 6:return s.fn.call(s.context,i,o,v,f,l),!0}for(d=1,h=new Array(e-1);d<e;d++)h[d-1]=arguments[d];s.fn.apply(s.context,h)}else{var N=s.length,b;for(d=0;d<N;d++)switch(s[d].once&&this.removeListener(r,s[d].fn,void 0,!0),e){case 1:s[d].fn.call(s[d].context);break;case 2:s[d].fn.call(s[d].context,i);break;case 3:s[d].fn.call(s[d].context,i,o);break;case 4:s[d].fn.call(s[d].context,i,o,v);break;default:if(!h)for(b=1,h=new Array(e-1);b<e;b++)h[b-1]=arguments[b];s[d].fn.apply(s[d].context,h)}}return!0},m.prototype.on=function(r,i,o){return w(this,r,i,o,!1)},m.prototype.once=function(r,i,o){return w(this,r,i,o,!0)},m.prototype.removeListener=function(r,i,o,v){var f=p?p+r:r;if(!this._events[f])return this;if(!i)return j(this,f),this;var l=this._events[f];if(l.fn)l.fn===i&&(!v||l.once)&&(!o||l.context===o)&&j(this,f);else{for(var g=0,s=[],e=l.length;g<e;g++)(l[g].fn!==i||v&&!l[g].once||o&&l[g].context!==o)&&s.push(l[g]);s.length?this._events[f]=s.length===1?s[0]:s:j(this,f)}return this},m.prototype.removeAllListeners=function(r){var i;return r?(i=p?p+r:r,this._events[i]&&j(this,i)):(this._events=new y,this._eventsCount=0),this},m.prototype.off=m.prototype.removeListener,m.prototype.addListener=m.prototype.on,m.prefixed=p,m.EventEmitter=m,n.exports=m}(P)),P.exports}var L=S();const k=T(L),R=new k;class A extends k{constructor(){super(),this.data=[]}getAll(){return this.data}setData(_){this.data=_,this.emit("change")}}const C=new A;R.on("FETCH_DATA",n=>{C.setData(n)});const D=[{id:1,recordist:"Claire",date:"10/10/2025",time:"23:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055290/Yukon_River_2_fbi0r9.jpg"},{id:2,recordist:"Hanna",date:"11/10/2025",time:"00:35:00",lat:65.18846044,lon:-151.4652797,temperature:"-35°C",conditions:"Cloudy",tags:"Yukon River",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/field_recording_2_xan6ng.jpg"},{id:3,recordist:"Miguel",date:"12/10/2025",time:"01:35:00",lat:63.93657,lon:-138.47639,temperature:"-35°C",conditions:"Cloudy",tags:"Klondike River",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/students_working_5_a43l75.jpg"},{id:4,recordist:"Claire",date:"13/10/2025",time:"23:35:00",lat:63.90152,lon:-137.95093,temperature:"-35°C",conditions:"Snow",tags:"Field Work",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/Yukon_River_1_wsuiqa.jpg"},{id:5,recordist:"Joao",date:"14/10/2025",time:"00:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Cloudy",tags:"Tombstone Territorial Park",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/Tombstone_Park_4_l7hfui.jpg"},{id:6,recordist:"Susan",date:"15/10/2025",time:"01:35:00",lat:63.90152,lon:-137.95093,temperature:"-35°C",conditions:"Rain",tags:"Interviews",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/field_recording_3_gulz7r.jpg"},{id:7,recordist:"Ricardo",date:"16/10/2025",time:"23:35:00",lat:64.55625,lon:-138.51835,temperature:"-35°C",conditions:"Cloudy",tags:"Tombstone Territorial Park",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_3_zieofz.jpg"},{id:8,recordist:"Andres",date:"17/10/2025",time:"00:35:00",lat:64.27131,lon:-138.72133,temperature:"-35°C",conditions:"Rain",tags:"Interviews",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_1_crjb7h.jpg"},{id:9,recordist:"Julia",date:"18/10/2025",time:"01:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Cloudy",tags:"Klondike River",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/drilling_river_ice_ya1yvt.jpg"},{id:10,recordist:"Joao",date:"19/10/2025",time:"23:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Snow",tags:"Klondike River",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055293/students_working_2_ibr7vr.jpg"},{id:11,recordist:"Joao",date:"20/10/2025",time:"00:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055292/Yukon_River-5_faolxu.jpg"},{id:12,recordist:"Susan",date:"21/10/2025",time:"01:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055291/Yukon_River_4_hlp5dg.jpg"},{id:13,recordist:"Ricardo",date:"22/10/2025",time:"23:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",soundFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055291/Yukon_River_3_xoonfg.jpg"}],I=async()=>{try{await new Promise(_=>setTimeout(_,500));const n=D;R.emit("FETCH_DATA",n)}catch(n){console.error("Error fetching dummy data:",n)}},z=({record:n})=>{const[_,p]=x.useState(null),[y,u]=x.useState(null);return x.useEffect(()=>{const w=n.pictureFilePath,j=n.soundFilePath;p(w),u(j)},[n]),t.jsxs("div",{className:"recording-card",children:[_?t.jsx("img",{src:_,alt:`Picture for ${n.recordist}`,className:"recording-image",loading:"lazy",onError:w=>{w.target.src="https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image"}}):t.jsx("p",{children:"Loading images..."}),t.jsxs("div",{className:"recording-details",children:[t.jsx("h3",{children:n.id}),t.jsxs("p",{children:[t.jsx("strong",{children:"Date:"})," ",n.date]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Time:"})," ",n.time]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Location:"})," Lat: ",n.lat,", Lon: ",n.lon]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Conditions:"})," ",n.conditions]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Duration:"})," ",n.Duration||n.duration]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Key Words:"})," ",n.tags||n["Key Words"]]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Recordist:"})," ",n.recordist]}),y?t.jsxs("audio",{controls:!0,"aria-label":`Audio recording by ${n.recordist}`,children:[t.jsx("source",{src:y,type:"audio/mpeg"}),"Your browser does not support the audio element."]}):t.jsx("p",{children:"Loading Audio..."})]})]})};z.propTypes={record:c.shape({id:c.oneOfType([c.string,c.number]).isRequired,pictureFilePath:c.string.isRequired,soundFilePath:c.string.isRequired,recordist:c.string.isRequired,date:c.string.isRequired,time:c.string.isRequired,lat:c.oneOfType([c.string,c.number]).isRequired,lon:c.oneOfType([c.string,c.number]).isRequired,conditions:c.string.isRequired,Duration:c.string,duration:c.string,tags:c.string,"Key Words":c.string}).isRequired};const E=({latitude:n=37.7577,longitude:_=-122.4376,zoom:p=10})=>{const w=`https://api.mapbox.com/styles/v1/ikerluna/cm2dk18gv007l01ph2anbepkk.html?title=false&access_token=pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg#${p}/${n}/${_}`;console.log("MapEmbed src:",w);const j=m=>{m.stopPropagation()};return t.jsx("div",{className:"map-wrapper",onWheel:j,children:t.jsx("iframe",{width:"100%",height:"100%",src:w,title:"Mapbox embed",style:{border:"none"}})})};E.propTypes={latitude:c.number,longitude:c.number,zoom:c.number};const O=()=>{const[n,_]=x.useState([]),[p,y]=x.useState(!0),[u,w]=x.useState({recordist:"",tags:"",conditions:"",date:""}),[j,m]=x.useState([]),[a,r]=x.useState(!1),i=x.useCallback(()=>{const e=C.getAll()||[];_(e),y(!1)},[]);x.useEffect(()=>(I(),C.on("change",i),()=>{C.off("change",i)}),[i]);const o=[...new Set(n.map(e=>e.recordist))],v=[...new Set(n.flatMap(e=>e.tags?e.tags.split(",").map(h=>h.trim()):[]))],f=[...new Set(n.map(e=>e.conditions))],l=[...new Set(n.map(e=>e.date))];x.useEffect(()=>{let e=n;u.recordist&&(e=e.filter(h=>h.recordist===u.recordist)),u.tags&&(e=e.filter(h=>h.tags&&h.tags.toLowerCase().includes(u.tags.toLowerCase()))),u.conditions&&(e=e.filter(h=>h.conditions===u.conditions)),u.date&&(e=e.filter(h=>h.date===u.date)),m(e)},[n,u]);const g=(e,h)=>{w(d=>({...d,[e]:d[e]===h?"":h}))};x.useEffect(()=>{const e=()=>{window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsxs("div",{className:"field-recordings-page",children:[p?t.jsx("p",{children:"loading..."}):t.jsxs("div",{className:"field-recordings-layout",children:[t.jsxs("div",{className:"filter-sidebar",children:[t.jsxs("div",{className:"filter-group",children:[t.jsx("h3",{children:"Recordist"}),t.jsxs("div",{className:"buttons",children:[t.jsx("button",{className:`filter-btn ${u.recordist?"":"active"}`,onClick:()=>g("recordist",""),children:"All"}),o.map(e=>t.jsx("button",{className:`filter-btn ${u.recordist===e?"active":""}`,onClick:()=>g("recordist",e),children:e},e))]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("h3",{children:"Key Words"}),t.jsxs("div",{className:"buttons",children:[t.jsx("button",{className:`filter-btn ${u.tags?"":"active"}`,onClick:()=>g("tags",""),children:"All"}),v.map(e=>t.jsx("button",{className:`filter-btn ${u.tags===e?"active":""}`,onClick:()=>g("tags",e),children:e},e))]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("h3",{children:"Conditions"}),t.jsxs("div",{className:"buttons",children:[t.jsx("button",{className:`filter-btn ${u.conditions?"":"active"}`,onClick:()=>g("conditions",""),children:"All"}),f.map(e=>t.jsx("button",{className:`filter-btn ${u.conditions===e?"active":""}`,onClick:()=>g("conditions",e),children:e},e))]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("h3",{children:"Date"}),t.jsxs("div",{className:"buttons",children:[t.jsx("button",{className:`filter-btn ${u.date?"":"active"}`,onClick:()=>g("date",""),children:"All"}),l.map(e=>t.jsx("button",{className:`filter-btn ${u.date===e?"active":""}`,onClick:()=>g("date",e),children:e},e))]})]})]}),t.jsx("div",{className:"recording-list",children:j.length>0?j.map(e=>t.jsx(z,{record:e},e.id)):t.jsx("p",{children:"No recordings available."})}),t.jsx("div",{className:"map-container",children:t.jsx(E,{})})]}),t.jsx("button",{className:`scroll-to-top ${a?"show":""}`,onClick:s,"aria-label":"Scroll to top",children:"↑"})]})};export{O as default};
