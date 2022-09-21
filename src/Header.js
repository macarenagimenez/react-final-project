import React from "react";

import ManagementWeather from "./ManagementWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  let city = "Paris";

  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={3} className="city">
            <p>{city}</p>
          </Col>{" "}
          <Col></Col>
          <Col xs={5} className="searchEngine">
            <form>
              <input type="search" placeholder="⌨ Type your city..." />
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
