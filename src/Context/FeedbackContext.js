import { createContext, useState } from "react";
import FeedbackData from "../Data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export default FeedbackContext;

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },

    {
      id: 2,
      text: "This is feedback item 2",
      rating: 8,
    },

    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //Delete Feedback
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to Delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update edited Feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  //Edit Feedback
  const editItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addFeedback,
        editItem,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
