import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Mesagge from "./Mesagge";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ManagementWeather.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  faWind,
  faCloudRain,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

export default function ManagementWeather(props) {
  let weather = {
    temperature: Math.round(props.weatherValue.data.main.temp),
    description: props.weatherValue.data.weather[0].description,
    wind: Math.round(props.weatherValue.data.wind.speed),
    humidity: props.weatherValue.data.main.humidity,
    date: new Date(props.weatherValue.data.dt * 1000),
    icon: props.weatherValue.data.weather[0].icon,
    coordinates: props.weatherValue.data.coord,
  };

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={11}>
            <Mesagge fact={weather.icon} />
          </Col>
        </Row>
        <div className="infoWeather">
          <Row>
            {" "}
            <Col>
              <div className="description">
                <WeatherIcon code={weather.icon} />

                <span className="text-capitalize">{weather.description}</span>
              </div>
              <WeatherTemperature celsius={weather.temperature} />
            </Col>
            <Col></Col>
            <Col>
              <div className="parameters">
                <div className="day">
                  <FontAwesomeIcon icon={faCalendarDay} /> Today:{" "}
                  <FormattedDate date={weather.date} />
                </div>
                <div className="windy">
                  <FontAwesomeIcon icon={faWind} /> Wind: {weather.wind}
                  km/h
                </div>
                <div className="humidity">
                  <FontAwesomeIcon icon={faCloudRain} /> Humidity:{" "}
                  {weather.humidity}%
                </div>
              </div>
            </Col>
          </Row>
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </Container>
    </div>
  );
}
