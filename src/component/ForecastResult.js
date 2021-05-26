import React from 'react';

const ForecastResult = (props) => {
  const { temp, month, day, hour, icon, year } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (

    <div className="card " style={{background: "linear-gradient(45deg, #fe688b 30%, #ff8e53 90%)"}}>
      <div className="content">
        <div className="center aligned header">
          {day}/{month}/{year}
        </div>
        <div className="center aligned header">{hour}:00</div>
        <div className="image center aligned">
          <img className="" src={iconUrl} alt="Nothing" />
        </div>
        <div className="center aligned">Temperature:{temp}&#176;</div>
      </div>
    </div>
  );
};

export default ForecastResult;
