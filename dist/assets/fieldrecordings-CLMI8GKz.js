import{a as d,j as e}from"./react-V8IiPZyx.js";import{E as C}from"./eventemitter3-DMllpG5g.js";import{P as r}from"./prop-types-D0pSn4ZB.js";import{M as T,N as E,a as M,P as A}from"./react-map-gl-mKWdT8YR.js";import{a as y}from"./mapbox-gl--tciIPl5.js";import{F as D}from"./react-icons-Bl3RMTbh.js";import"./cookie-BX9QSSmL.js";import"./react-dom-b-nR2FO5.js";import"./scheduler-BNqrtbQi.js";const g=new C;class H extends C{constructor(){super(),this.data=[],this.selectedRecord=null}getAll(){return this.data}getSelectedRecord(){return this.selectedRecord}setData(n){this.data=n,this.emit("change")}setSelectedRecord(n){this.selectedRecord=n,this.emit("change")}}const l=new H;g.on("FETCH_DATA",i=>{l.setData(i)});g.on("SELECT_RECORD",i=>{l.setSelectedRecord(i)});const I=[{id:1,recordist:"Claire",date:"10/10/2025",time:"23:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055290/Yukon_River_2_fbi0r9.jpg"},{id:2,recordist:"Hanna",date:"11/10/2025",time:"00:35:00",lat:64.049004,lon:-139.442815,temperature:"-35°C",conditions:"Cloudy",tags:"Yukon River",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/field_recording_2_xan6ng.jpg"},{id:3,recordist:"Miguel",date:"12/10/2025",time:"01:35:00",lat:63.93657,lon:-138.47639,temperature:"-35°C",conditions:"Cloudy",tags:"Klondike River",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/students_working_5_a43l75.jpg"},{id:4,recordist:"Claire",date:"13/10/2025",time:"23:35:00",lat:63.90152,lon:-137.95093,temperature:"-35°C",conditions:"Snow",tags:"Field Work",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055290/Yukon_River_1_wsuiqa.jpg"},{id:5,recordist:"Joao",date:"14/10/2025",time:"00:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Cloudy",tags:"Tombstone Territorial Park",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055289/Tombstone_Park_4_l7hfui.jpg"},{id:6,recordist:"Susan",date:"15/10/2025",time:"01:35:00",lat:63.90152,lon:-137.95093,temperature:"-35°C",conditions:"Rain",tags:"Interviews",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/field_recording_3_gulz7r.jpg"},{id:7,recordist:"Ricardo",date:"16/10/2025",time:"23:35:00",lat:64.55625,lon:-138.51835,temperature:"-35°C",conditions:"Cloudy",tags:"Tombstone Territorial Park",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_3_zieofz.jpg"},{id:8,recordist:"Andres",date:"17/10/2025",time:"00:35:00",lat:64.27131,lon:-138.72133,temperature:"-35°C",conditions:"Rain",tags:"Interviews",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/Tombstone_Park_1_crjb7h.jpg"},{id:9,recordist:"Julia",date:"18/10/2025",time:"01:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Cloudy",tags:"Klondike River",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055288/drilling_river_ice_ya1yvt.jpg"},{id:10,recordist:"Joao",date:"19/10/2025",time:"23:35:00",lat:64.03985877,lon:-138.1501049,temperature:"-35°C",conditions:"Snow",tags:"Klondike River",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Grant_Deane_Records_Melting_Ice_xn4mp2.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055293/students_working_2_ibr7vr.jpg"},{id:11,recordist:"Joao",date:"20/10/2025",time:"00:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Belcher_Glacier_knpuil.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055282/Yukon_River-5_faolxu.jpg"},{id:12,recordist:"Susan",date:"21/10/2025",time:"01:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316581/Iceberg_Calving_-_Hansbreen_Glacier_r1gewz.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055281/Yukon_River_4_hlp5dg.jpg"},{id:13,recordist:"Ricardo",date:"22/10/2025",time:"23:35:00",lat:64.55629475,lon:-138.5183446,temperature:"-35°C",conditions:"Clear",tags:"Field Recording",audioFilePath:"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1739316582/Hornshund_Underwater_c7abfh.mp3",pictureFilePath:"https://res.cloudinary.com/dw1ht0zfd/image/upload/v1739055291/Yukon_River_3_xoonfg.jpg"}],L=async()=>{try{await new Promise(n=>setTimeout(n,500));const i=I;g.emit("FETCH_DATA",i)}catch(i){console.error("Error fetching dummy data:",i)}},b=i=>{g.emit("SELECT_RECORD",i)},R=({record:i})=>{const[n,p]=d.useState(!1),h=()=>{p(s=>!s)};return e.jsxs("div",{className:"recording-card",onClick:h,id:`record-${i.id}`,children:[e.jsx("img",{src:i.pictureFilePath,alt:`Picture for ${i.recordist}`,className:"recording-image glitch-image",loading:"lazy",onError:s=>{s.target.src="https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image"}}),n?e.jsxs("div",{className:"recording-details",children:[e.jsxs("h3",{children:["ID: ",i.id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Date:"})," ",i.date]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Time:"})," ",i.time]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Location:"})," Lat: ",i.lat,", Lon: ",i.lon]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Conditions:"})," ",i.conditions]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Duration:"})," ",i.Duration||i.duration]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Key Words:"})," ",i.tags||i["Key Words"]]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Recordist:"})," ",i.recordist]}),e.jsxs("audio",{controls:!0,autoPlay:!0,children:[e.jsx("source",{src:i.audioFilePath,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]}):e.jsx("div",{className:"preview-info",children:e.jsxs("p",{className:"recording-id",children:["ID: ",i.id]})})]})};R.propTypes={record:r.shape({id:r.oneOfType([r.string,r.number]).isRequired,pictureFilePath:r.string.isRequired,audioFilePath:r.string.isRequired,recordist:r.string.isRequired,date:r.string.isRequired,time:r.string.isRequired,lat:r.oneOfType([r.string,r.number]).isRequired,lon:r.oneOfType([r.string,r.number]).isRequired,conditions:r.string.isRequired,Duration:r.string,duration:r.string,tags:r.string,"Key Words":r.string}).isRequired};y.accessToken="pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY203NjMwZHptMHAzaDJrcXlrbnNuMHJlZiJ9.hkoRlM6gQ-BflcGjpI40GA";const q=()=>{const[i,n]=d.useState({latitude:64.049004,longitude:-139.442815,zoom:12.96,pitch:62.11,bearing:0,width:"100%",height:"100%"}),[p,h]=d.useState(l.getAll()),[s,f]=d.useState(l.getSelectedRecord()),m=d.useRef(null);d.useEffect(()=>{const o=()=>{h(l.getAll()),f(l.getSelectedRecord())};return l.on("change",o),()=>l.off("change",o)},[]);const v=()=>{const o=m.current.getMap();o.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),o.setTerrain({source:"mapbox-dem",exaggeration:1.5})},x=o=>{b(o)};return e.jsxs(T,{ref:m,...i,mapStyle:"mapbox://styles/ikerluna/cm76812yz01va01qx4nvo4nf3",mapboxApiAccessToken:y.accessToken,onLoad:v,onMove:o=>n(o.viewState),onError:o=>console.error("Mapbox error:",o),interactive:!0,children:[e.jsx(E,{position:"top-right"}),p.map(o=>e.jsx(M,{latitude:o.lat,longitude:o.lon,children:e.jsx("div",{onClick:()=>x(o),style:{cursor:"pointer"},children:e.jsx(D,{size:30,color:s&&o.id===s.id?"black":"grey"})})},o.id)),s&&e.jsx(A,{className:"custom-popup",latitude:s.lat,longitude:s.lon,closeButton:!0,closeOnClick:!1,onClose:()=>b(null),offsetTop:-10,children:e.jsxs("div",{children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx("h3",{children:s.id})}),e.jsxs("audio",{controls:!0,autoPlay:!0,children:[e.jsx("source",{src:s.audioFilePath,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})})]})},Z=()=>{const[i,n]=d.useState([]),[p,h]=d.useState(!0),[s,f]=d.useState({recordist:"",tags:"",conditions:"",date:""}),[m,v]=d.useState([]),[x,o]=d.useState(!1),[c,j]=d.useState(null),_=d.useCallback(()=>{const t=l.getAll()||[];n(t),h(!1)},[]);d.useEffect(()=>(L(),l.on("change",_),()=>{l.off("change",_)}),[_]);const F=[...new Set(i.map(t=>t.recordist))],P=[...new Set(i.flatMap(t=>t.tags?t.tags.split(",").map(a=>a.trim()):[]))],k=[...new Set(i.map(t=>t.conditions))],z=[...new Set(i.map(t=>t.date))];d.useEffect(()=>{let t=i;s.recordist&&(t=t.filter(a=>a.recordist===s.recordist)),s.tags&&(t=t.filter(a=>a.tags&&a.tags.toLowerCase().includes(s.tags.toLowerCase()))),s.conditions&&(t=t.filter(a=>a.conditions===s.conditions)),s.date&&(t=t.filter(a=>a.date===s.date)),v(t)},[i,s]);const u=(t,a)=>{f(w=>({...w,[t]:w[t]===a?"":a}))},N=(t,a)=>{c&&c.id===t&&c.view===a?j(null):j({id:t,view:a})};d.useEffect(()=>{const t=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const S=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("div",{className:"field-recordings-page",children:[p?e.jsx("p",{children:"loading..."}):e.jsxs("div",{className:"field-recordings-layout",children:[e.jsxs("div",{className:"filter-sidebar",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("h3",{children:"Recordist"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:`filter-btn ${s.recordist?"":"active"}`,onClick:()=>u("recordist",""),children:"All"}),F.map(t=>e.jsx("button",{className:`filter-btn ${s.recordist===t?"active":""}`,onClick:()=>u("recordist",t),children:t},t))]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("h3",{children:"Key Words"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:`filter-btn ${s.tags?"":"active"}`,onClick:()=>u("tags",""),children:"All"}),P.map(t=>e.jsx("button",{className:`filter-btn ${s.tags===t?"active":""}`,onClick:()=>u("tags",t),children:t},t))]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("h3",{children:"Conditions"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:`filter-btn ${s.conditions?"":"active"}`,onClick:()=>u("conditions",""),children:"All"}),k.map(t=>e.jsx("button",{className:`filter-btn ${s.conditions===t?"active":""}`,onClick:()=>u("conditions",t),children:t},t))]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("h3",{children:"Date"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:`filter-btn ${s.date?"":"active"}`,onClick:()=>u("date",""),children:"All"}),z.map(t=>e.jsx("button",{className:`filter-btn ${s.date===t?"active":""}`,onClick:()=>u("date",t),children:t},t))]})]})]}),e.jsx("div",{className:"recording-list",children:m.length>0?m.map(t=>e.jsx(R,{record:t,expanded:!!(c&&c.id===t.id),viewMode:c&&c.id===t.id?c.view:null,onToggle:N},t.id)):e.jsx("p",{children:"No recordings available."})}),e.jsx("div",{className:"map-container",children:e.jsx(q,{})})]}),e.jsx("button",{className:`scroll-to-top ${x?"show":""}`,onClick:S,"aria-label":"Scroll to top",children:"↑"})]})};export{Z as default};
