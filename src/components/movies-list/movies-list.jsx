import React, {PureComponent} from "react";
import propTypes from "../../propTypes";

import MovieCard from "../movie-card/movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: 0
    };
  }

  render() {
    const {films} = this.props;
    const {activeFilm} = this.state;

    return (
      <div className="catalog__movies-list">
        {Object.keys(films).map((id) => (
          <MovieCard key={id} filmId={id} filmStillFrame={films[id].stillFrame} filmName={films[id].name}
            onHover={() => {
              this.setState(() => ({
                activeFilm: id
              }));
            }}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = propTypes.PropTypesFilms;

export default MoviesList;
