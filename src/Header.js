import React, { useState } from "react";

import ManagementWeather from "./ManagementWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  let [city, setCity] = useState("Paris");

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={3} className="city">
            <p>{city}</p>
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
        <ManagementWeather cityValue={city} />
      </Container>
    </div>
  );
}
