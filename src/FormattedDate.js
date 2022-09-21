import React from "react";

export default function FormattedDate(props) {
  if (!props.date) {
    return "";
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <span>
      {day} {hour}:{minutes}hs
    </span>
  );
}
