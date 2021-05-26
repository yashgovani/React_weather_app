import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import withContext from '../withContext';

const WeatherResult = ({ weather }) => {

  let Icon = null;

  const sunset = new Date(weather.sys.sunset * 1000)
    .toLocaleTimeString()
    
  const sunrise = new Date(weather.sys.sunrise * 1000)
    .toLocaleTimeString()
    

  if (weather.weather[0].main === 'Thunderstorm') {
    Icon = <FontAwesomeIcon icon={faBolt} />;
  } else if (weather.weather[0].main === 'Drizzle') {
    Icon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (weather.weather[0].main === 'Rain') {
    Icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (weather.weather[0].main === 'Snow') {
    Icon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (weather.weather[0].main === 'Clear') {
    Icon = <FontAwesomeIcon icon={faSun} />;
  } else if (weather.weather[0].main === 'Clouds') {
    Icon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    Icon = <FontAwesomeIcon icon={faSmog} />;
  }
  return (
    <div style={{ fontWeight: '900', fontSize: '24px' }}>
      <div style={{ marginBottom: '10px' }}>
        {weather.name}, {weather.sys.country}
      </div>
      <div>
        <div style={{ marginBottom: '10px' }}>{Icon}</div>
        <div>
          <div style={{ marginBottom: '10px' }}>
            {Math.floor(weather.main.temp)}&#176;
          </div>
          <p style={{ alignContent: 'center', fontWeight: '400' }}>
            {weather.weather[0].description}
          </p>
        </div>
      </div>
      <div className="WeatherDetailsWrapper">
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>
            {Math.floor(weather.main.temp_max)}&#176;
          </p>
          <p style={{ alignContent: 'center' }}>High Temperature</p>
        </div>
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>
            {weather.wind.speed}mph
          </p>
          <p style={{ alignContent: 'center' }}>Wind</p>
        </div>
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>{sunrise}</p>
          <p style={{ alignContent: 'center' }}>Sunrise</p>
        </div>
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>
            {Math.floor(weather.main.temp_min)}&#176;
          </p>
          <p style={{ alignContent: 'center' }}>Low Temperature</p>
        </div>
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>
            {weather.main.humidity}%
          </p>
          <p style={{ alignContent: 'center' }}>Rain</p>
        </div>
        <div className="WeatherDetail">
          <p style={{ alignContent: 'center', fontWeight: '900' }}>{sunset}</p>
          <p style={{ alignContent: 'center' }}>Sunset</p>
        </div>
      </div>
    </div>
  );
};

export default withContext(WeatherResult);
