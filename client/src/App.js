import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Defination from "./Defination";
import Form from "./Form";

console.log(process.env.REACT_APP_MEDIC_DICT_KEY);

const App = () => {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState([]);

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setMean(dataJ);
    console.log(dataJ);
    setMain(dataJ[0]);
    console.log(dataJ[0]);
    const url = dataJ[0].phonetics[0].audio;
    setAudio(url);
  };

  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="dict">Medical Dictionary</div>
          <div className="searchBox">
            <input
              type="text"
              className="input_bar"
              placeholder="Type your word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className="btn" onClick={Search}>
              Search
            </button>
          </div>
        </div>
      </div>
      {word === "" ? (
        <Defination mean={mean} main={main} audio={audio} />
      ) : (
        <div className="page_bg">Type a word in the box</div>
      )}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
