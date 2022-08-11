import React, { useState } from "react";

export  const Todos = () => {
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
    <div className="container">
      <h1>Enter your text</h1>
      <textarea
        value={text}
        onChange={handlechange}
        id="mybox"
        className="form"
      ></textarea>
      <button
        onClick={handleUPclick}
        type="button"
        class="btn btn-primary mx-2"
      >
        Uppercase
      </button>
      <button
        onClick={handleLWclick}
        type="button"
        class="btn btn-primary mx-2"
      >
        Lowercase
      </button>
      <button onClick={handlecopy} type="button" class="btn btn-primary mx-2">
        Copy text
      </button>
      <button onClick={handleclear} type="button" class="btn btn-primary mx-2">
        Clear
      </button>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text
            .split(" ")
            .reduce((acc, e) => (e.length > 0 ? acc + 1 : acc), 0)}{" "}
          words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
