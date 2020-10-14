import PropTypes from "prop-types";

export default {
  PropTypesFilms: {
    films: PropTypes.objectOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      stillFrame: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired,
      runTime: PropTypes.string.isRequired
    })).isRequired
  },
  PropTypesMovieCard: {
    onHover: PropTypes.func.isRequired,
    filmStillFrame: PropTypes.string.isRequired,
    filmName: PropTypes.string.isRequired,
    filmId: PropTypes.string.isRequired
  },
  PropTypesReviews: {
    reviews: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired
    })).isRequired
  },
  PropTypesFilmId: {
    filmId: PropTypes.string.isRequired
  },
  PropTypesAddReview: {
    onReview: PropTypes.func.isRequired
  },
};
