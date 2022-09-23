import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <>
        <span className="temperature">{props.celsius}</span>
        <span className="degrees">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature">{fahrenheit()}</span>
        <span className="degrees">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </>
    );
  }
}
