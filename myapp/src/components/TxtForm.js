import React, { useState,useEffect } from 'react';
import BtnSubmit from './BtnSubmit';

export default function TxtForm({ formheading }) {
  const [text, setText] = useState("enter your text here");
  const [data,setData] = useState();

  const handleTextChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleUpperCaseClick = () => {
    // Update the text state to upper case when the button is clicked
    setText(data.email);
  };
  
  

  useEffect(() =>{
    fetch("/get-user/123").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])



  return (
    <>
    <div className='container'>
      <h2>{formheading}</h2>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          id="myBox" 
          value={text} 
          onChange={handleTextChange} // Handle text change
          rows="8"
        />
      </div>
      <BtnSubmit 
        submitype="Convert to Upper Case" 
        onButtonClick={handleUpperCaseClick} // Pass the function to BtnSubmit
      />
    </div>
    <div className="container my-4">
      <h2>Your input Summery</h2>
      <p>Your input contains {text.split(" ").length} words and {text.length} charectre</p>
      <p>{0.008 * text.length} minute required to read this artical</p>
      
    </div>

    </>
  );
}