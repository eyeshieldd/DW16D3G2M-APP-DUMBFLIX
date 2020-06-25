import React, { useEffect, useState } from "react";
import CardBackgorund from "../../components/userComponent/CardBackgorund/CardBackgorund";
import Grid from "../../components/userComponent/GridComponent/Grid";
import { image1 } from "../../dummyData/imagedetail";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { getFilmsMovies, getFilmsSeries } from "../../redux/actions/film";
import PropTypes from "prop-types";


const Home = ({
  getFilmsMovies,
  getFilmsSeries,
  films: { filmsMovies, filmsTVSeries, loading }
}) => {

  useEffect(
    () => {
      getFilmsSeries(6);
      getFilmsMovies(6);
    },
    [getFilmsMovies, getFilmsSeries]
  );

  return loading ? (
    <div>
    </div>
  ) : (
      <div>
        <CardBackgorund images={image1} />
        <Grid title="TV Series" films={filmsTVSeries} />
        <Grid title="Movies" films={filmsMovies} />
      </div>
    );
};

Home.propTypes = {
  getFilmsMovies: PropTypes.func.isRequired,
  getFilmsTVSeries: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  films: state.film
});

export default connect(mapStateToProps, { getFilmsMovies, getFilmsSeries })(Home);
