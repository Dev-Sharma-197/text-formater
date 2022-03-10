import React, { useState } from "react"; // useState is a part of hooks
import propTypes from "prop-types"

// this component is for the textarea
export default function TextFormater(props) {

  // function to handle the button working on click
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to UpperCase", "success")

  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to LowerCase", "success")
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Converted to Removed", "success")

  }
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    // props.showAlert("Converted to Cleared", "success")

  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success")

  }

  // function to handle the event after the change of state in textarea 
  const handleOnChange = (event) => {
    setText(event.target.value) // !important without this you cannot write in textarea
  }

  const [text, setText] = useState("") // usestate hook to monitor the changes in textarea

  return (
    <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }} >
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" rows="6" id="myBox" value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }} onChange={handleOnChange} ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleLowClick} >Convert to Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleExtraSpace} >Remove Extra Space</button>
      <button className="btn btn-primary m-2" onClick={handleCopyText} >Copy Text</button>
      <button className="btn btn-primary m-2" onClick={handleClearText} >Clear Text</button>
      <div className="container" >
        <h1>Your Text Summary</h1>
        <p> {text === "" ? "0" : text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
        <p> {text === "" ? "0" : 0.008 * text.split(" ").length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text above to preview here"}</p>
      </div>
    </div>
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