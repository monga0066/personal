import React, { useState } from "react";
export  const Todos = ({mode,showalert}) => {
  const [text, settext] = useState("");
  const handleUPclick = () => {
    let change = text.toUpperCase();
    settext(change);
    showalert("Change into UpperCase","success")

  };
  const handleLWclick = () => {
    let change = text.toLowerCase();
    settext(change);
    showalert("Change into LowerCase","success")

  };
  const handleclear = () => {
    settext("");
    showalert("All text Clear","success")

  };
  const handlechange = (e) => {
    settext(e.target.value);
  };
  const handlecopy = () => {
    let s = document.getElementById("mybox");
    s.select();
    navigator.clipboard.writeText(s.value);
    showalert("All text is Copy","success")

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
    style={{backgroundColor: mode==="dark" ? "#042743" : "white", color: mode==="dark"?"white":"black"}}

      ></textarea>
      <button
      disabled={text.length===0}
        onClick={handleUPclick}
        type="button"
        className="btn btn-primary mx-2 my-2"
      >
        Uppercase
      </button>
      <button
            disabled={text.length===0}

        onClick={handleLWclick}
        type="button"
        className="btn btn-primary mx-2"
      >
        Lowercase
      </button>
      <button       disabled={text.length===0}
 onClick={handlecopy} type="button" className="btn btn-primary mx-2">
        Copy text
      </button>
      <button       disabled={text.length===0}
 onClick={handleclear} type="button" className="btn btn-primary mx-2">
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
        <p>{text.length>0 ?text:"Nothing to preview !!"}</p>

        </div>
      </div>
    </div>
  );
};
