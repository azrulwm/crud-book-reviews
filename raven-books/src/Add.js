import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addReview(data);
    // props.getReviews();
  };

  const addReview = (data) => {
    console.log(data);
    console.log(props);
    axios
      .post("http://localhost:3000/reviews", data)
      .then(() => {
        props.setReviews([...props.reviews, data]);
      })
      .then(() => props.getReviews());
  };

  return (
    <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
      <h4>Add Review</h4>
      <input
        type="text"
        placeholder="Book Title"
        name="book_title"
        {...register("book_title", { required: true, maxLength: 40 })}
      />
      <input
        type="text"
        placeholder="Review"
        name="book_review"
        {...register("book_review", { required: true, maxLength: 450 })}
      />
      <input
        type="number"
        placeholder="Rating"
        name="book_rating"
        {...register("book_rating", { required: true, max: 5, min: 0 })}
      />

      <input id="btn" type="submit" />
    </form>
  );
}
