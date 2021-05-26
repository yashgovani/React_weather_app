import React from 'react';
import withContext from '../withContext';
import SearchBar from '../component/SearchBar';
import WeatherResult from '../component/WeatherResult';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  const { searchValue, weatherInfo } = props.context;

  return (
    <div className="ui container">
      <SearchBar
        value={searchValue}
        change={props.context.handleChange}
        submit={props.context.handleSubmit}
      />
      {weatherInfo && <WeatherResult weather={weatherInfo} />}

      <Link to="/forecast" className="btn-primary">
        Click here to go forecast page
      </Link>
    </div>
  );
};

export default withContext(Layout);
