import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

function App() {
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    axios.get("https://raven-books.herokuapp.com/reviews").then((res) => {
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, [reviews]);

  return (
    <div className="App">
      <Add reviews={reviews} setReviews={setReviews} />
      <div className="reviews">
        {reviews.map((item) => {
          return (
            <div className="review">
              <h3> Title: {item.book_title}</h3>
              <h3> Review: {item.book_review}</h3>
              <h3> Rating: {item.book_rating}</h3>
              <Edit id={item.id} reviews={reviews} setReviews={setReviews} />
              <Delete id={item.id} reviews={reviews} setReviews={setReviews} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
