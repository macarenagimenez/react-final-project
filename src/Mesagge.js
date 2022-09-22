import Reac from "react";

export default function Mesagge(props) {
  const codeMapping = {
    "01d": "Don't forget the sunscreen!",
    "01n": "Have a good night!",
    "02d": "Walking day!",
    "02n": "Walking night!",
    "03d": "Good day for a book :)",
    "03n": "Good night for a book :)",
    "04d": "It's nice to sleep",
    "04n": "It's nice to sleep",
    "09d": "Walks with an umbrella!",
    "09n": "Walks with an umbrella!",
    "10d": "Film and coffe?",
    "10n": "Film and coffe?",
    "11d": "Film and chocolate?",
    "11n": "Film and chocolate?",
    "13d": "Let's make a snowman!",
    "13n": "Let's make a snowman!",
    "50d": "Plsss, be careful!",
    "50n": "plsss, be careful!",
  };
  return <p className="textMessage">{codeMapping[props.fact]}</p>;
}
