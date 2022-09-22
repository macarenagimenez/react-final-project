import React, { useState } from "react";
import axios from "axios";
import ManagementWeather from "./ManagementWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  let [city, setCity] = useState("Paris");
  let [ready, setReady] = useState(false);
  let [api, setApi] = useState({});

  function firsCity() {
    let apiKey = "b2f2f8716112d43df23731c97b6bce5f";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(showWeather);
  }

  function showWeather(response) {
    console.log(response);
    setReady(true);
    setApi(response);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b2f2f8716112d43df23731c97b6bce5f";
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(showWeather);
  }

  let form = (
    <div>
      <Row>
        <Col xs={3} className="city">
          <p className="text-capitalize">{city}</p>
        </Col>{" "}
        <Col></Col>
        <Col xs={5} className="searchEngine">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="⌨ Type your city..."
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );

  if (ready) {
    return (
      <div className="header">
        <Container>
          {form}
          <ManagementWeather weatherValue={api} />
        </Container>
      </div>
    );
  } else {
    firsCity();
    return (
      <div className="header">
        {" "}
        {form}
        Loading...
      </div>
    );
  }
}
