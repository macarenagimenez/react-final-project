import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
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
  let [weather, setWeather] = useState({});
  let [lastCityLoaded, setLastCityLoaded] = useState(null);

  function showWeather(response) {
    console.log(response);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search(inputCity) {
    setLastCityLoaded(inputCity);
    let apiKey = "b2f2f8716112d43df23731c97b6bce5f";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(showWeather);
  }
  if (lastCityLoaded === props.cityValue) {
    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={11}>
              <p className="textMessage">It's f*cking raining</p>
            </Col>
          </Row>
          <div className="infoWeather">
            <Row>
              {" "}
              <Col>
                <div className="description">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="icon"
                  />
                  <span className="text-capitalize">{weather.description}</span>
                </div>
                <span className="temperature">{weather.temperature}</span>
                <span className="degrees">°C | °F</span>
              </Col>
              <Col></Col>
              <Col>
                <div className="parameters">
                  <div className="day">
                    <FontAwesomeIcon icon={faCalendarDay} /> Today:{" "}
                    <FormattedDate date={weather.date} />
                  </div>
                  <div className="windy">
                    <FontAwesomeIcon icon={faWind} /> Wind:{weather.wind}
                    km/h
                  </div>
                  <div className="humidity">
                    <FontAwesomeIcon icon={faCloudRain} /> Humidity:{" "}
                    {weather.humidity}%
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  } else {
    search(props.cityValue);
    return <p>loading...</p>;
  }
}
