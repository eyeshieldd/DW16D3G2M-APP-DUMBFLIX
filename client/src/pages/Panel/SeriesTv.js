import React, { useEffect } from "react";
import CardBackgorund from "../../components/userComponent/CardBackgorund/CardBackgorund";
import MovieGrid from "../../components/userComponent/GridComponent/Grid";
import { image2 } from "../../dummyData/imagedetail";

import { connect } from "react-redux";
import { getFilmsSeries } from "../../redux/actions/film";
import PropTypes from "prop-types";

const SeriesTv = ({ getFilmsSeries, films: { filmsTVSeries, loading } }) => {
  const limit = 12;

  useEffect(() => {
    getFilmsSeries(limit);
  }, [getFilmsSeries]);

  return loading ? (
    <>
      <p>KOSONG</p>
    </>
  ) : (
      <div>
        <CardBackgorund images={image2} />
        <MovieGrid title="TV Series" films={filmsTVSeries} />
      </div>
    );
};

SeriesTv.propTypes = {
  getFilmsTVSeries: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsSeries })(SeriesTv);
