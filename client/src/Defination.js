import React from "react";
import Select from "./Select.js";
import Example from "./Example";
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
          <div className="meanings">meaning & definitions :</div>
          <div>
            <ol>
              <Select mean={mean} />
            </ol>
          </div>
          <div className="exp">examples :</div>
          <div>
            <ol>
              <Example mean={mean} />
            </ol>
          </div>
          <div className="syn">synonyms :</div>
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
