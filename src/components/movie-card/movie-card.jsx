import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import propTypes from "../../propTypes";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, filmId, filmStillFrame, filmName} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
        onHover();
      }}>
        <div className="small-movie-card__image">
          <img src={filmStillFrame} alt={filmName}/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${filmId}`}>{filmName}</Link>
        </h3>
      </article>
    );
  }

}

MovieCard.propTypes = propTypes.PropTypesMovieCard;

export default MovieCard;
