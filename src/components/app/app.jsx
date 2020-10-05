import React from "react";
import PropTypes from "prop-types";

import Home from "../home/home";

const App = (props) => {
  const {filmName} = props;
  const {filmGenre} = props;
  const {filmYear} = props;

  return <Home filmName={filmName} filmGenre={filmGenre} filmYear={filmYear}/>;
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired,
};

export default App;
