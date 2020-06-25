import React from 'react';
import './card.css';

const CardBackground = ({ images: { img, logo, desc, year, type } }) => {
	return (
		<div
			className="frame"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0, 0, 0), black), url('${img}'), #1c1c1c`
			}}
		>
			<div className="frame-content">
				<div className="frame-text">
					<img src={logo} alt="logoframe" className="logoframe" />
					<p style={{ fontFamily: "Product Sans", fontSize: 19, alignContent: "center" }}>{desc}</p>
					<p>
						<span style={{ fontFamily: "Product Sans", fontSize: 15 }} className="year">{year}</span>
						<span style={{ fontFamily: "Product Sans", fontSize: 15 }} className="tipe">{type}</span>
					</p>
					<button style={{ fontFamily: "Product Sans", fontSize: 20, width: 200 }} className="frame-button"><b>WATCH NOW !</b></button>
				</div>
			</div>
		</div>
	);
};

export default CardBackground;
