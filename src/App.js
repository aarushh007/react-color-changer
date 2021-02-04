import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const colors = [
    "blue",
    "green",
    "red",
    "orange",
    "purple",
    "brown",
    "lightseagreen"
  ];
  const [index, setIndex] = React.useState(1);
  const [color, setColor] = React.useState(colors[0]);
  const nextColor = () => {
    if (index === colors.length - 1) {
      setIndex(0);
      setColor(colors[index]);
    } else {
      setColor(colors[index]);
      setIndex(index + 1);
    }
  };
  React.useEffect(() => {
    document.title = `color: ${color}`;
  }, [color]);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Hello.</h1>
      <button onClick={nextColor}>Click to change color!</button>
    </div>
  );
}
