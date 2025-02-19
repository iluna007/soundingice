import "../Styles/Fieldworks.css";

const Fieldworks = () => {
	return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<div className='row example'>
					<div className='col'>
						<h2 className='title'>Field Works</h2>

						{/* Four-column section */}
						<div className='row mt-5'>
							<div className='col-md-3 '>
								<h3 className='subtitles'>
									Crackling Transmissions & Cracking Ice
								</h3>
								<hr></hr>
								<p className='description'>
									Drilling a series of holes through the 1.5 metre thickness of
									winter-ice allows us to lower our hydrophones and tune into
									the underwater sounds of the Yukon River. The stillness that
									we experience above ground is met with a vibrant acoustic
									clamour below as the river's movements continue to churn their
									icy channels. If we listen intently we may hear the sounds of
									compressed air being released from chunks of free-floating
									ice.
								</p>
								<p className='description'>
									<strong>Equipment used:</strong> Aquarian Audio H3
									omni-directional Hydrophone range 10 Hz to 100KHz and the
									Ambient Sound Fish omni-directional Hydrophone ASF-1 MKII 7Hz-
									40kHz. Sound Devices MixPre-6 II Audio Recorder / Mixer.
								</p>
							</div>
							<div className='col-md-3'>
								<h3 className='subtitles'>From Deep Freeze to Thaw</h3>
								<hr></hr>
								<p className='description'>
									The Yukon is already warming at twice the global average. As
									temperatures continue to rise, average annual precipitation
									will increase, becoming more variable. Local impacts will
									include: permafrost thaw, extreme weather events, changes to
									snow, ice and water as well as to vegetation and wildlife.
									River systems will also experience the ravages of warming as
									ice processes are altered. Using our field recorders we
									attempt to track signals of climate change across different
									scales and contexts.
								</p>
								<p className='description'>
									<strong>Equipment used:</strong> LOM Uši pair of
									stereo-matched, low noise and high sensitivity
									omni-directional microphones for recording delicate sounds and
									environments. Tremor Labs XEOFÓN - Geophone Seismic Microphone
									(Converts seismic activity and vibrations into voltages). Zoom
									H5 4-Track Portable Recorder.
								</p>
							</div>
							<div className='col-md-3'>
								<h3 className='subtitles'>Auroral Acoustics</h3>
								<hr></hr>
								<p className='description'>
									When solar winds break through the Earth’s magnetic field,
									their charged particles collide with molecules of atmospheric
									gases producing a ‘natural cinema’ that electrifies the night
									sky in luminous shades of green and red. These moving charged
									particles also produce intense low frequency radio emissions.
									Using a series of bespoke microphones we tune into the sonic
									worlds of these natural radio signals.
								</p>
								<p className='description'>
									“We can ‘hear’ the aurorae as a busy chatter when these radio
									signals are converted to sound, again varying on the real
									timescale that you can hear."{" "}
									<a
										href='https://www.gresham.ac.uk/watch-now/sounds-universe'
										target='_blank'
										rel='noopener noreferrer'
										className='description_forlinks'
									>
										Astronomer Caroline Crawford on the sounds of the universe.
									</a>
								</p>
								<p className='description'>
									<strong>Equipment used:</strong> LOM Elektrosluch 3+ is an
									open-source device for listening to electromagnetic fields.
									Mole-Rat is an experimental EMF audio device for exploring the
									electromagnetic fields. Zoom H5 4-Track Portable Recorder.
								</p>
							</div>
							<div className='col-md-3'>
								<h3 className='subtitles'>Frozen Futures</h3>
								<hr></hr>
								<p className='description'>
									As feedback loops between the hydrological cycles of these two
									great river systems interact with societal changes as well as
									broader forces, how might we tune into their complex sonic
									worlds and histories? What different climate horizons do these
									rivers now  face; futures that must also include living
									communities, animal habitats and ecosystems as well as the
									many different socio- economic pressures that organise life in
									the North?
								</p>
								<p className='description'>
									<strong>Equipment used:</strong> Tremor Labs XEOFÓN - Geophone
									Seismic Omni-directional Microphone (Converts seismic activity
									and vibrations into voltages). Zoom H5 4-Track Portable
									Recorder.
								</p>
							</div>
						</div>

						{/* Field Trip section */}
						<div className='row mt-5'>
							<div className='col-md-12'>
								<h3 className='subtitles'>Field Trip</h3>
								<hr></hr>
								<p className='description'>
									<a
										href='https://yukon.ca/en/outdoor-recreation-and-wildlife/parks-and-protected-areas/tombstone-territorial-park'
										target='_blank'
										rel='noopener noreferrer'
										className='description_forlinks'
									>
										Tombstone Territorial Park.
									</a>
									This is a 2,200 square kilometres protected and unique
									wilderness of rugged peaks, permafrost landforms and abundant
									wildlife, all reflected in a rich First Nations culture. The
									area's Hän name Ddhäl Ch'èl Cha Nän means "ragged mountain
									land." The park is a legacy of the Tr'ondëk Hwëch'in Land
									Claim Agreement and lies within their Traditional Territory.
									The Dempster Highway bisects the park and provides an
									opportunity to view stunning arctic tundra landscapes and
									wildlife and access to hiking areas. The concentration of wide
									ecological niches has resulted in a diverse collection of
									flora and fauna uncommon at this latitude.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fieldworks;
