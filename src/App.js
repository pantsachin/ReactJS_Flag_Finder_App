import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇮🇳": "India",
  "🇦🇺": "Australia",
  "🇨🇳": "China",
  "🇺🇸": "USA",
  "🇵🇰": "Pakistan",
  "🇧🇩": "Bangladesh",
  "🇯🇵": "Japan",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
  "🇨🇦": "Canada",
  "🇦🇷": "Argentina"
};

var flagArray = Object.keys(flagDictionary);

console.log(flagDictionary);

export default function App() {
  var [write, setWrite] = useState("");

  function inputChangeHandler(event) {
    // console.log(event.target.value)
    setWrite(event.target.value);
    var inputEmoji = event.target.value;

    var meaning = flagDictionary[inputEmoji];

    console.log(meaning);

    setWrite(meaning);
  }

  function listenClickEvent(item) {
    console.log("clicked", item);

    var meaning = flagDictionary[item];

    setWrite(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "" }}>Know the Wavin' Flag</h1>
      <input
        style={{
          border: "1px solid red",
          background: "black",
          color: "yellow"
        }}
        onChange={inputChangeHandler}
      ></input>
      <div
        style={{
          color: "blue",
          fontSize: "2rem",
          padding: "1.5rem",
          fontStyle: "bold"
        }}
        className="meaning"
      >
        <span style={{ color: "blue" }}> Country </span> - {write}
      </div>

      <div className="flags">
        <ul className="list">
          {flagArray.map((item) => {
            return (
              <li
                style={{
                  cursor: "pointer",
                  display: "inline",
                  padding: "1rem 0.5rem",
                  fontSize: "4rem"
                }}
                onClick={() => listenClickEvent(item)}
                key={item}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <br />
        <br />
        <br />

        <p style={{ color: "white", fontSize: "larger" }}>
          {" "}
          "When i get older, i will be stronger, they'll call me freedom, just
          like a wavin' flag...just like a wavin' flag..."
        </p>
      </div>
    </div>
  );
}
