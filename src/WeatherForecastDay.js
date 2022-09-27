import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <Row>
      <Col>
        {" "}
        <div className="WeatherForecastDay">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} />
        <div className="WeatherForecastTemperature">
          <span className="WeatherForecastMax"> {maxTemperature()}</span>
          <span className="WeatherForecastMin"> {minTemperature()}</span>
        </div>
      </Col>
    </Row>
  );
}
