import PropTypes from "prop-types";
import Card from "../Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteItem, editItem } = useContext(FeedbackContext);

  return (
    <>
      <form>
        <Card>
          <div className="num-display">{item.rating}</div>
          <button onClick={() => deleteItem(item.id)} className="close">
            <FaTimes color="purple" />
          </button>
          <button onClick={() => editItem(item)} className="edit">
            <FaEdit color="purple" />
          </button>
          <div className="text-display">{item.text}</div>
        </Card>
      </form>
    </>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
