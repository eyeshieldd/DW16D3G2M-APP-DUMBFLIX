import React from 'react';
import movieThumbnail from '../../../images/videothumbnail/smallvideo1.jpg';

const Movie = ({ name }) => {
	return (
		<div className="episode-container">
			<div className="play-now">
				<img src={movieThumbnail} alt="movie" className="mini-img" />
				<label className="img-play-now">In Play Now</label>
				<p className="small-desc">{name}: Movie</p>
			</div>
		</div>
	);
};

export default Movie;