import "./App.css";
import axios from "axios";

export default function Delete(props) {
  const deleteReview = () => {
    console.log(props.id);
    console.log(props);
    // axios.delete(`http://localhost:3000/reviews/${props.id}`).then((res) => {
    //   props.setReviews(
    //     props.reviews.filter((item) => {
    //       return item.id !== props.id;
    //     })
    //   );
    // });
  };

  return (
    <button className="del-btn" onClick={deleteReview}>
      Delete Review
    </button>
  );
}
