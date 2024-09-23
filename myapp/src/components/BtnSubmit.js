import React from 'react';

export default function BtnSubmit({ submitype, onButtonClick }) {
  const handleUPclick = () => {
    console.log("Upper case clicked");
    onButtonClick(); // Call the function passed from the parent
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleUPclick}>
        {submitype}
      </button>
    </div>
  );
}