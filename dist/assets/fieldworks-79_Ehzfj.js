import{r as c,j as e}from"./react-rRunGLgB.js";import"./classnames-ELZfJkp_.js";const l=({galleryItems:a})=>{const[r,t]=c.useState(a[0]),n=s=>{t(s)};return e.jsxs("div",{className:"carousel-container",children:[e.jsx("div",{className:"selected-media",children:r.includes("vimeo.com")?e.jsx("iframe",{src:r,title:"Project Video",style:{width:"100%",height:"500px",border:"none"},allowFullScreen:!0}):e.jsx("img",{src:r,alt:"Selected",className:"img-fluid rounded",style:{width:"70%",maxHeight:"100%",objectFit:"contain"},onError:s=>{s.target.onerror=null,s.target.src="/path/to/default-thumbnail.jpg"}})}),e.jsxs("div",{className:"carousel-thumbnails",children:[e.jsx("button",{className:"carousel-control-left",onClick:()=>{document.querySelector(".horizontal-scroll").scrollBy({left:-200,behavior:"smooth"})},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"black",viewBox:"0 0 16 16",children:e.jsx("path",{fillRule:"evenodd",d:"M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"})})}),e.jsx("div",{className:"horizontal-scroll",children:a.map((s,i)=>e.jsx("div",{className:"thumbnail-container",onClick:()=>n(s),children:e.jsx("img",{src:s,alt:`Thumbnail ${i+1}`,className:"img-fluid",onError:o=>{o.target.onerror=null,o.target.src="/path/to/default-thumbnail.jpg"}})},i))}),e.jsx("button",{className:"carousel-control-right",onClick:()=>{document.querySelector(".horizontal-scroll").scrollBy({left:200,behavior:"smooth"})},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"black",viewBox:"0 0 16 16",children:e.jsx("path",{fillRule:"evenodd",d:"M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"})})})]})]})},d=["https://res.cloudinary.com/drc27xzb4/image/upload/v1743937597/1_TOMBSTONE_shzrio.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937598/2_TOMBSTONE_nicfqh.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937604/3_TOMBSTONE_n7792z.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937604/4_TOMBSTONE_kl8hqh.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937605/5_TOMBSTONE_wjaicp.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937606/6_TOMBSTONE_tocxwy.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937614/7_TOMBSTONE_r0zlsa.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937613/8_TOMBSTONE_gyiwye.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937608/9_TOMBSTONE_usio4x.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937611/10_TOMBSTONE_jdlspd.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937616/11_TOMBSTONE_ncp6wu.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937625/12_TOMBSTONE_wgscsx.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937611/13_TOMBSTONE_igtnxv.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937613/14_TOMBSTONE_iuvxph.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937621/15_TOMBSTONE_mpisfc.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937616/16_TOMBSTONE_o0qn5s.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937618/17_TOMBSTONE_pvweft.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937618/18_TOMBSTONE_cetcmz.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937625/19_TOMBSTONE_sv3rx8.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937626/20_TOMBSTONE_zb7ept.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937624/21_TOMBSTONE_rcrui0.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743937624/22_TOMBSTONE_n5njt1.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940756/23_TOMBSTONE_zgolaf.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940756/24_TOMBSTONE_egvdnp.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940756/25_TOMBSTONE_ac0e3k.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940757/26_TOMBSTONE_frazs6.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940758/27_TOMBSTONE_ulbxgo.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940759/28_TOMBSTONE_vownof.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940760/29_TOMBSTONE_pvoagj.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940761/30_TOMBSTONE_kpzxte.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940761/31_TOMBSTONE_iwcyk5.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743940766/32_TOMBSTONE_xod0kk.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967273/33_TOMBSTONE_uvwfne.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967279/34_TOMBSTONE_ua2bce.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967296/35_TOMBSTONE_pfz7ig.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967290/36_TOMBSTONE_e6cdkf.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967295/37_TOMBSTONE_ltsdlf.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967287/38_TOMBSTONE_wtt6hb.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967270/39_TOMBSTONE_ie8hth.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967280/40_TOMBSTONE_lln4lj.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967277/41_TOMBSTONE_lclg38.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967260/42_TOMBSTONE_jkhjw7.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967295/43_TOMBSTONE_px3ndh.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967288/44_TOMBSTONE_hbg1ju.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967291/45_TOMBSTONE_ueyral.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967269/46_TOMBSTONE_oqrcfl.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967264/47_TOMBSTONE_mmbhda.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967273/48_TOMBSTONE_ohu6oq.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967261/49_TOMBSTONE_zj3qww.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967270/50_TOMBSTONE_eyz6re.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967299/51_TOMBSTONE_joyf0s.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967264/52_TOMBSTONE_wz9lo4.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967293/53_TOMBSTONE_n6uvkn.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967256/54_TOMBSTONE_hdjemx.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967268/55_TOMBSTONE_lzwexp.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967266/56_TOMBSTONE_sg1hxi.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967298/57_TOMBSTONE_nchmcc.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967296/58_TOMBSTONE_qtrdeo.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967297/59_TOMBSTONE_yriegp.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967284/60_TOMBSTONE_hbph2d.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967267/61_TOMBSTONE_fylivp.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967276/62_TOMBSTONE_mwqmxi.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967293/63_TOMBSTONE_v4q6sc.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967286/64_TOMBSTONE_ofl4lb.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967284/65_TOMBSTONE_siat0h.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967273/66_TOMBSTONE_j0dda0.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967259/67_TOMBSTONE_py3xsk.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967258/68_TOMBSTONE_ivilxg.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967278/69_TOMBSTONE_z9oo4y.jpg","https://res.cloudinary.com/drc27xzb4/image/upload/v1743967284/70_TOMBSTONE_zwsene.jpg"],p=()=>e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"mt-6",style:{textAlign:"justify",paddingTop:"48px",paddingBottom:"24px",paddingLeft:"32px",paddingRight:"32px"},children:e.jsx("div",{className:"row example",children:e.jsxs("div",{className:"col",children:[e.jsx("h2",{className:"title",children:"Field Works"}),e.jsxs("div",{className:"row mt-5",children:[e.jsxs("div",{className:"col-md-3 ",children:[e.jsx("h3",{className:"subtitles",children:"Crackling Transmissions & Cracking Ice"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"Drilling a series of holes through the 1.5 metre thickness of winter-ice allows us to lower our hydrophones and tune into the underwater sounds of the Yukon River. The stillness that we experience above ground is met with a vibrant acoustic clamour below as the river's movements continue to churn their icy channels. If we listen intently we may hear the sounds of compressed air being released from chunks of free-floating ice."}),e.jsxs("p",{className:"description",children:[e.jsx("strong",{children:"Equipment used:"})," Aquarian Audio H3 omni-directional Hydrophone range 10 Hz to 100KHz and the Ambient Sound Fish omni-directional Hydrophone ASF-1 MKII 7Hz- 40kHz. Sound Devices MixPre-6 II Audio Recorder / Mixer."]})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("h3",{className:"subtitles",children:"From Deep Freeze to Thaw"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"The Yukon is already warming at twice the global average. As temperatures continue to rise, average annual precipitation will increase, becoming more variable. Local impacts will include: permafrost thaw, extreme weather events, changes to snow, ice and water as well as to vegetation and wildlife. River systems will also experience the ravages of warming as ice processes are altered. Using our field recorders we attempt to track signals of climate change across different scales and contexts."}),e.jsxs("p",{className:"description",children:[e.jsx("strong",{children:"Equipment used:"})," LOM Uši pair of stereo-matched, low noise and high sensitivity omni-directional microphones for recording delicate sounds and environments. Tremor Labs XEOFÓN - Geophone Seismic Microphone (Converts seismic activity and vibrations into voltages). Zoom H5 4-Track Portable Recorder."]})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("h3",{className:"subtitles",children:"Auroral Acoustics"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"When solar winds break through the Earth’s magnetic field, their charged particles collide with molecules of atmospheric gases producing a ‘natural cinema’ that electrifies the night sky in luminous shades of green and red. These moving charged particles also produce intense low frequency radio emissions. Using a series of bespoke microphones we tune into the sonic worlds of these natural radio signals."}),e.jsxs("p",{className:"description",children:['“We can ‘hear’ the aurorae as a busy chatter when these radio signals are converted to sound, again varying on the real timescale that you can hear."'," ",e.jsx("a",{href:"https://www.gresham.ac.uk/watch-now/sounds-universe",target:"_blank",rel:"noopener noreferrer",className:"description_forlinks_fieldworks",children:"Astronomer Caroline Crawford on the sounds of the universe."})]}),e.jsxs("p",{className:"description",children:[e.jsx("strong",{children:"Equipment used:"})," LOM Elektrosluch 3+ is an open-source device for listening to electromagnetic fields. Mole-Rat is an experimental EMF audio device for exploring the electromagnetic fields. Zoom H5 4-Track Portable Recorder."]})]}),e.jsxs("div",{className:"col-md-3",children:[e.jsx("h3",{className:"subtitles",children:"Frozen Futures"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"As feedback loops between the hydrological cycles of these two great river systems interact with societal changes as well as broader forces, how might we tune into their complex sonic worlds and histories? What different climate horizons do these rivers now  face; futures that must also include living communities, animal habitats and ecosystems as well as the many different socio- economic pressures that organise life in the North?"}),e.jsxs("p",{className:"description",children:[e.jsx("strong",{children:"Equipment used:"})," Tremor Labs XEOFÓN - Geophone Seismic Omni-directional Microphone (Converts seismic activity and vibrations into voltages). Zoom H5 4-Track Portable Recorder."]})]})]}),e.jsx("div",{className:"row mt-12",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("h3",{className:"subtitles",children:"Field Trip"}),e.jsx("hr",{}),e.jsxs("p",{className:"description",children:[e.jsx("a",{href:"https://yukon.ca/en/outdoor-recreation-and-wildlife/parks-and-protected-areas/tombstone-territorial-park",target:"_blank",rel:"noopener noreferrer",className:"description_forlinks_fieldworks",children:"Tombstone Territorial Park."}),`This is a 2,200 square kilometres protected and unique wilderness of rugged peaks, permafrost landforms and abundant wildlife, all reflected in a rich First Nations culture. The area's Hän name Ddhäl Ch'èl Cha Nän means "ragged mountain land." The park is a legacy of the Tr'ondëk Hwëch'in Land Claim Agreement and lies within their Traditional Territory. The Dempster Highway bisects the park and provides an opportunity to view stunning arctic tundra landscapes and wildlife and access to hiking areas. The concentration of wide ecological niches has resulted in a diverse collection of flora and fauna uncommon at this latitude.`]}),e.jsx(l,{galleryItems:d})]})}),e.jsxs("div",{className:"row mt-12",children:[e.jsxs("div",{className:"col-md-12",children:[e.jsx("h3",{className:"subtitles",children:"Field Notes"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"An audio-visual programme of listening exercises, talks, screenings, workshops, and seminars"})]}),e.jsxs("div",{className:"row mt-5",children:[e.jsxs("div",{className:"col-md-3 ",children:[e.jsx("p",{className:"description",children:e.jsx("a",{href:"https://mfineart.ca/macaulay-co-fine-art/artists/jeneen-frei-njootli/",target:"_blank",rel:"noopener noreferrer",className:"description_forlinks_fieldworks",children:"Jeneen Frei Njootli"})}),e.jsx("h3",{className:"subtitles",children:"Listening Exercise"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"Jeneen Frei Njootli lives and works in their Vuntut Gwitchin homelands, outside of Old Crow, Yukon. There is an industrial and photo adjacent lean in their practice, working with culturally intimate materials that manifest in sculpture, regalia, performance and sound. They have gotten to work with many mentors and knowledge holders over the years in addition to holding an MFA from the University of British Columbia and a BFA from Emily Carr University. Frei Njootli’s work has been presented in many galleries, museums and artist-run centers around the world. Recent exhibitions include The Power Plant Contemporary Art Gallery, Toronto (2025), Makeshift Memorials, Small Revolutions at KADIST San Francisco (2024) Noise of the Flesh: Score for Gina Pane at the FRAC (Fonds régional d’art contemporain) France (2023), Indian Theatre, curated by Candice Hopkins at CCS BARD Hessel Museum, NY (2023), Soft Water Hard Stone an exhibition at the New Museum Triennial, New York (2021), Listen Up: Northern Soundscapes, Anchorage Museum (2021), Where Do We Go From Here? At the Vancouver Art Gallery (2021)."})]}),e.jsxs("div",{className:"col-md-3 ",children:[e.jsx("p",{className:"description",children:e.jsx("a",{href:"https://www.uu.nl/staff/IRRDuncan#:~:text=Ifor%20Duncan%20is%20a%20writer,spaces%2C%20processes%2C%20and%20materialities.",target:"_blank",rel:"noopener noreferrer",className:"description_forlinks_fieldworks",children:"Ifor Duncan"})}),e.jsx("h3",{className:"subtitles",children:"River Confluences "}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"Ifor Duncan is a writer, artist and interdisciplinary researcher. He is Postdoctoral Researcher on the ERC project EcoViolence at the University of Utrecht. Ifor’s research focuses on political violence against communities in the contexts of degrading watery spaces, processes, and materialities. These include river borders, mega-dam projects and rivers as dynamic archives of genocide. He encounters these concerns through visual cultures, cultural memory, and a fieldwork practice that involves submerged audio-visual methods. Ifor holds a PhD from the Centre for Research Architecture, Department of Visual Cultures, Goldsmiths University of London (2014-2019) where he was also Lecturer (2022-2024). Ifor was postdoctoral fellow at the New Institute Centre for the Environmental Humanities (NICHE), Ca’ Foscari, University of Venice (2020-22), and has taught in the School of Architecture at the Royal College of Art."})]}),e.jsxs("div",{className:"col-md-3 ",children:[e.jsx("p",{className:"description",children:"Bill Morrison"}),e.jsx("h3",{className:"subtitles",children:"Screening: Dawson City Frozen Time"}),e.jsx("hr",{}),e.jsxs("p",{className:"description",children:["Bill Morrison, best known for the nitrate tone poem"," ",e.jsx("a",{href:"https://www.bfi.org.uk/film/cca55721-4f6b-5f8d-b488-971ad819c562/decasia",target:"_blank",rel:"noopener noreferrer",className:"description_forlinks_fieldworks",children:"Decasia"}),"(2002), returns to the medium to compose a rollicking Gold Rush ballad of newsreels, silent melodramas, comedies and actualities. Its argument parallels the early years of cinema with the white settlement of North America’s final wild frontier, as well as the archaeological digging of cinema historians and that of the miners. It’s an intricate and holistic look at North American history, from colonial encounters with members of the Tr’ondëk Hwëch’in First Nation, whose fishing camp was settled as Dawson City, to the collapsing capitalism of the Depression and its injurious effects. Fim: 2016, 120 mins."]})]}),e.jsxs("div",{className:"col-md-3 ",children:[e.jsx("p",{className:"description",children:"DCMF Studio"}),e.jsx("h3",{className:"subtitles",children:"Recording Workshop"}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"Embark on a journey through the art and science of sound recording. This workshop serves as an immersive introduction to professional-grade equipment while exploring the philosophy and techniques of audio recording. Participants will follow the entire signal chain—from capturing sound at its source and choosing the right sensing objects (microphones and pickups) to amplification, processing, and bridging the analogue and digital worlds to create high-quality recordings. Through hands-on demonstrations and guided discussions, you will: Explore the dual philosophies of sound recording—faithful documentation and creative expression. Learn tools and techniques specific to field recording, cinematic sound design, and music production. Begin mastering the cutting-edge capabilities of DCMF’s brand-new facility."})]})]})]})]})})})});export{p as default};
