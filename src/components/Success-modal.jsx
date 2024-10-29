import { faSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

const Successmodal = () => {
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
    <Modal isOpen={true} style={customStyles} contentLabel="Example Modal">
      <FontAwesomeIcon icon={faSign} size="xl" />
      <h3>Your expense is successfully add in the Expense List.</h3>
    </Modal>
  );
};

export default Successmodal;
