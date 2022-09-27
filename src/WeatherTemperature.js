export default function WeatherTemperature(props) {
  return (
    <>
      <span className="temperature">{props.celsius}</span>
      <span className="degrees">°C</span>
    </>
  );
}
