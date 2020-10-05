import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import PropTypes from "prop-types";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {filmName} = props;
  const {filmGenre} = props;
  const {filmYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main filmName={filmName} filmGenre={filmGenre} filmYear={filmYear}/>
        </Route>
        <Route path="/login" exact component={SignIn}/>
        <Route path="/mylist" exact component={MyList}/>
        <Route path="/films/:id" exact component={Film}/>
        <Route path="/films/:id/review" exact component={AddReview}/>
        <Route path="/player/:id" exact component={Player}/>
        <Route
          render={() => (
            <div>404</div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
};

export default App;
