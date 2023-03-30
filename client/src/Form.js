import React from "react";
import "./App.css";
import Defination from "./Defination";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  // function to update state of age with value
  // enter by user in form

  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    return "";
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e, onsubmit);
          }}
        >
          {/*when user submit the form , handleSubmit()
      function will be called .*/}
          <h2> Would you like to read this later? </h2>
          <h3> Enter your name and email </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          {/*when user write in name input box , handleChange()
            function will be called. */}
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          {/* when user write in email input box , handleEmailChange()
            function will be called.*/}

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
};

export default Form;
