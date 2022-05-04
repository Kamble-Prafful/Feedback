import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <div>No Feedback Yet</div>;
  }
  return (
    <>
      {/* <div className="feedback-item">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div> */}

      <div className="feedback-item">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FeedbackList;
