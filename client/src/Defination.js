import React from "react";
import Select from "./Select.js";
import Form from "./Form";
import "./App.css";
// import Synonyms from "./Synonym";
// import Antonyms from "./Antonyms";

const Defination = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container-fluid" key={Defination.license}>
        <div className="row dark-theme">
          <div className="main_word">{main.word}</div>
          {audio ? (
            <audio controls className="audio_word" src={audio}></audio>
          ) : (
            <div className="audio_txt">Audio not found</div>
          )}
          <div className="meanings">Meaning & definitions :</div>
          <div>
            <ol>
              <Select mean={mean} />
            </ol>
          </div>
          <div className="exp">Symptoms :</div>
          <div>
            <ol>
              <Form mean={mean} />
            </ol>
          </div>
          <div className="syn">Need other refrences?:</div>
          <div className="ref-button">
            <button className="ref-butn">Click here</button>
          </div>
          {/* <div>
            <ol className="syn_mean">
              <Synonyms mean={mean} />
            </ol>
          </div> */}

          {/* <div>
            <ol className="anto_mean/>
            </ol>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Defination;
