import './App.css';
import Rating from './components/Rating'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [ratings, setRatings] = useState([])

  function addRating() {
    const newRating = {id: uuidv4()}
    setRatings([newRating, ...ratings])
  }

  function deleteRating(id){
    setRatings(ratings.filter(rating => rating.id !== id))
  }

  return (
    <div className="App">
      <h1>
        <i className="fa-solid fa-star"></i>
        Star Rating Panel
        <i className="fa-solid fa-star"></i>
      </h1>        
      <button className='new-rating' onClick={addRating}>New Rating</button>
      <div className='ratings'>        
        {ratings.map(rating =>  {
            return (
              <Rating 
                key={rating.id} 
                onClick={() => deleteRating(rating.id)} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
