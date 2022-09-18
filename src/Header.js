import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col className="date">
            <p>OCT 21</p>
            <p>London</p>
          </Col>
          <Col className="searchEngine">
            <form>
              <input type="search" placeholder="Type your city..." />
              <button>Search</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="description">Cloudy (icon) </div>
            <span className="temperature">35</span>
            <span>°C | °F</span>
          </Col>
          <Col>
            <div className="windy">
              <FontAwesomeIcon icon={faWind} /> Wind 10km/h
            </div>
            <div className="humidity">
              <FontAwesomeIcon icon={faCloudRain} /> Humidity 10%
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
