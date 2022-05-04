import { useState } from "react";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [text, setChangeText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);

  const changeTextHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be more than 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setChangeText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);

      setChangeText("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <Card>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={changeTextHandler}
            type="text"
            placeholder="Write a Review..."
            value={text}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </Card>
    </form>
  );
}

export default FeedbackForm;