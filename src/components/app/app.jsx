import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import propTypes from "../../propTypes";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main films={films}/>
        </Route>
        <Route path="/login" exact component={SignIn}/>
        <Route path="/mylist" exact component={MyList}/>
        <Route path="/films/:id" exact render={(props) => (
          <Film
            films={films}
            reviews={reviews[props.match.params.id]}
            filmId={props.match.params.id}/>)}/>
        <Route path="/films/:id/review" exact render={(props) => (
          <AddReview
            onReview={() => {
              console.log(`Add review`);
            }}
            films={films}
            filmId={props.match.params.id}/>)}/>
        <Route path="/player/:id" exact render={(props) => (
          <Player
            films={films}
            filmId={props.match.params.id}/>)}/>
        <Route
          render={() => (
            <div>404</div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = propTypes.PropTypesFilms;

export default App;
