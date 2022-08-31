import React, { useState } from "react";
export  const Todos = ({mode}) => {
  const [text, settext] = useState("");
  const handleUPclick = () => {
    let change = text.toUpperCase();
    settext(change);
  };
  const handleLWclick = () => {
    let change = text.toLowerCase();
    settext(change);
  };
  const handleclear = () => {
    settext("");
  };
  const handlechange = (e) => {
    settext(e.target.value);
  };
  const handlecopy = () => {
    let s = document.getElementById("mybox");
    s.select();
    navigator.clipboard.writeText(s.value);
  };
  return (
    <div className="container"  style={{color: mode==="dark"?"white":"black"}}>
      <h2>Enter your text</h2>
      <textarea
        value={text}
        onChange={handlechange}
        id="mybox"
        className="form-control"
        rows="8"
    style={{backgroundColor: mode==="dark" ? "grey" : "white", color: mode==="dark"?"white":"black"}}

      ></textarea>
      <button
        onClick={handleUPclick}
        type="button"
        className="btn btn-primary mx-2 my-2"
      >
        Uppercase
      </button>
      <button
        onClick={handleLWclick}
        type="button"
        className="btn btn-primary mx-2"
      >
        Lowercase
      </button>
      <button onClick={handlecopy} type="button" className="btn btn-primary mx-2">
        Copy text
      </button>
      <button onClick={handleclear} type="button" className="btn btn-primary mx-2">
        Clear
      </button>

      <div className="container my-3" style={{color: mode==="dark"?"white":"black"}}>
        <h3>Your text Summary</h3>
        <p>
          {text
            .split(" ")
            .reduce((acc, e) => (e.length > 0 ? acc + 1 : acc), 0)}{" "}
          words and {text.length} Characters
        </p>
        <h3>Preview</h3>
        <div className="preview">
        <p>{text.length>0 ?text:"Enter Text in the input for the prview"}</p>

        </div>
      </div>
    </div>
  );
};
