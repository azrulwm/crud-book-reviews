import "./App.css";
import { useState, useEffect } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

function App() {
  const [reviews, setReviews] = useState([]);
  const getReviews = () =>
    axios.get("http://localhost:3000/reviews").then((res) => {
      setReviews(res.data);
      console.log(res.data);
    });

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="App">
      <Add reviews={reviews} setReviews={setReviews} getReviews={getReviews} />
      <div className="reviews">
        {console.log(reviews)};
        {[...reviews].map((item) => {
          return (
            <div className="review">
              <h3> Title: {item.book_title}</h3>
              <h3> Review: {item.book_review}</h3>
              <h3> Rating: {item.book_rating}</h3>
              <Edit
                id={item.id}
                reviews={reviews}
                setReviews={setReviews}
                getReviews={getReviews}
              />
              <Delete id={item.id} reviews={reviews} setReviews={setReviews} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
