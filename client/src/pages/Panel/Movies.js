import React, { useEffect } from "react";
import CardBackgorund from "../../components/userComponent/CardBackgorund/CardBackgorund";
import MovieGrid from "../../components/userComponent/GridComponent/Grid";
import { image3 } from "../../dummyData/imagedetail";

import { connect } from "react-redux";
import { getFilmsMovies } from "../../redux/actions/film";
import PropTypes from "prop-types";

const Movies = ({ getFilmsMovies, films: { filmsMovies, loading } }) => {
  const limit = 12;


  useEffect(() => {
    getFilmsMovies(limit);
  }, [getFilmsMovies]);


  return loading ? (
    <>
      <p>KOSONG</p>
    </>
  ) : (
      <div>

        <CardBackgorund images={image3} />
        <MovieGrid title="Movies" films={filmsMovies} />
      </div>
    );
};

Movies.propTypes = {
  getFilmsMovies: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsMovies })(Movies);
