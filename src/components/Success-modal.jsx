import { faSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const Successmodal = ({ title, modalOpen, total }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles} contentLabel="Example Modal">
      <FontAwesomeIcon icon={faSign} size="xl" />
      <h3>
        Your <b>{title} expense</b> is successfully add in the Expense List.{" "}
        {"(" + total + ")"} Kyats
      </h3>
    </Modal>
  );
};

export default Successmodal;
