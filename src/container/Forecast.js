import React from 'react';
import ForecastResult from '../component/ForecastResult';
import withContext from '../withContext';

const Forecast = (props) => {
  const { foreCastInfo } = props.context;


  return (
    <div className="ui four cards">
      {foreCastInfo &&
        Object.values(foreCastInfo).map((item) => (
          <ForecastResult
            key={item.dt}
            temp={Math.floor(item.main.temp * 1) / 1}
            icon={item.weather[0].icon}
            month={item.dt_txt.slice(5, 7)}
            year={item.dt_txt.slice(0,4)}
            day={item.dt_txt.slice(8, 10)}
            hour={item.dt_txt.slice(11, 13) * 1}
          />
        ))}
    </div>
  );
};

export default withContext(Forecast);
