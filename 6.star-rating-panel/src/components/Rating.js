import React from "react";
import '../stylesheets/Rating.css';
import { useState } from "react";

function Rating({ onClick }) {

  const [numStars, setNumStars] = useState(0);

  function handleStarClick(index) {
    setNumStars(index + 1)
  }

  return (
    <div className='rating-container'>
      <p>
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star rate ${numStars > index ? 'active' : ''}`}
            onClick={() => handleStarClick(index)} 
          ></i>
        ))}
      </p>
      <textarea type='text' placeholder="Leave us a comment here:"></textarea>
      <button className="eliminate" onClick={onClick}><i className="fa-solid fa-x"></i></button>
    </div>
  )
}

export default Rating;