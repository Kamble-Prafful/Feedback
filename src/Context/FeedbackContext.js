import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export default FeedbackContext;

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetching data from Mock Backend
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  //Delete Feedback
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to Delete this?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" }); //Removing from JSON Server
      setFeedback(feedback.filter((item) => item.id !== id)); //Removing from UI
    }
  };

  // Update edited feedback
  const updateFeedback = async (id, updatedItem) => {
    console.log(id);
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/body",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? data : item)));
    setEditFeedback({
      item: {},
      edit: false,
    });
  };

  //Edit Feedback
  const editItem = (item) => {
    setEditFeedback({
      item: {},
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
