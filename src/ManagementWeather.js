import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ManagementWeather.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { faSearch, faWind } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export default function ManagementWeather(props) {
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
    });
    setReady(true);
  }
  function search(city) {
    let apiKey = "d9fa039441ee765f866a01bc611a5d61";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(showWeather);
  }
  if (ready) {
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
                  <span>Cloudy</span>
                </div>
                <span className="temperature">{weather.temperature}</span>
                <span className="degrees">°C | °F</span>
              </Col>
              <Col></Col>
              <Col>
                <div className="parameters">
                  <div className="day">
                    <FontAwesomeIcon icon={faCalendarDay} /> Today: Wed 10:30hs
                  </div>
                  <div className="windy">
                    <FontAwesomeIcon icon={faWind} /> Wind:10km/h
                  </div>
                  <div className="humidity">
                    <FontAwesomeIcon icon={faCloudRain} /> Humidity: 10%
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
