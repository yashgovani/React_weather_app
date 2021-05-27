import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Forecast from './container/Forecast';
import Layout from './container/Layout';
import Eror from './component/Eror';
import Context from './Context';

const API_KEY = 'Your Key';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      weatherInfo: null,
      foreCastInfo: null,
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchValue}&APPID=${API_KEY}&units=metric`;
    const foreCastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchValue}&APPID=${API_KEY}&units=metric`;

    await axios
      .get(weatherURL)
      .then((response) => {
        this.setState({ weatherInfo: response.data, error: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true, weatherInfo: null });
      });

    await axios
      .get(foreCastURL)
      .then((response) => {
        this.setState({ foreCastInfo: response.data.list, error: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true, foreCastInfo: null });
      });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
        }}
      >
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/forecast" component={Forecast} />
          <Route component={Eror} />
        </Switch>
      </Context.Provider>
    );
  }
}

export default App;
