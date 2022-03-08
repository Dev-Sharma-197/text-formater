import React, { useState } from "react"; // useState is a part of hooks
import propTypes from "prop-types"

// this component is for the textarea
export default function TextFormater(props) {

  // function to handle the button working on click
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // function to handle the event after the change of state in textarea 
  const handleOnChange = (event) => {
    setText(event.target.value) // !important without this you cannot write in textarea
  }

  const [text, setText] = useState("Enter the text here") // usestate hook to monitor the changes in textarea

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" placeholder={text} rows="6" id="myBox" onChange={handleOnChange} ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

// declaring the types of props
TextFormater.propTypes = {
  heading: propTypes.string
}

// declaring the default props value
TextFormater.defaultProps = {
  heading: "heading for text formater"
}