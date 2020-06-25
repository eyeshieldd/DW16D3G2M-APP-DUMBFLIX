import React, { useState } from 'react';
import './MovieDetails.css';
import episodeThumbnail from '../../../images/videothumbnail/smallvideo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Episode = ({ name, episodes, handlePlayNow }) => {
	const [index, setIndex] = useState(0);
	const [episode, setEpisode] = useState('');
	let imageIndex = `image-${index}`;

	return (
		<div className="episode-container">

			< Carousel>

				{episodes.map((episode, index) => (
					<img
						style={{
							height: 200,
							width: 300,
							marginTop: 13,

						}}
						src={`http://localhost:5000/uploads/${episode.thumbnailFilm}`}

					/>
				))}
			</Carousel>
		</div>
	);
};

export default Episode;
