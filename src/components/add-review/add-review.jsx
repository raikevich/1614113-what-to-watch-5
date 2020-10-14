import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import propTypes from "../../propTypes";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 3,
      review: ``
    };
  }

  render() {
    const {onReview, films, filmId} = this.props;
    const film = films[filmId];
    const ratings = [1, 2, 3, 4, 5];

    return (<section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${filmId}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.cover} alt={film.name}/>
        </div>
      </div>

      <div className="add-review">
        <form className="add-review__form"
          onSubmit={(e) => {
            e.preventDefault();
            onReview(this.state.rating, this.state.review);
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              {ratings.map((rating, i) => (
                <React.Fragment key={`rating-${rating}`}>
                  <input className="rating__input"
                    id={`star-${rating}`}
                    type="radio"
                    name="rating"
                    value={rating}
                    defaultChecked={rating == 3 && `true`}
                    onChange={(e) => {
                      this.setState({
                        rating: e.target.value
                      });
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
              onChange={(e) => {
                this.setState({
                  review: e.target.value
                });
              }}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>);
  }
}

AddReview.propTypes = Object.assign({}, propTypes.PropTypesFilms, propTypes.PropTypesFilmId, propTypes.PropTypesAddReview);

export default AddReview;
