import React from "react";

export default function FormattedDate(props) {
  console.log(props);
  //   let day = props.date.getDay();
  //   let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  return <div>{minutes}</div>;
  //   return `Hi`;
}
