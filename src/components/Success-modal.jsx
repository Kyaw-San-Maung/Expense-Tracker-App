import { faSign } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
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
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "400px",
    },
  };

  return (
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      contentLabel="Success Modal"
      ariaHideApp={false} // Optional: only for development, remember to remove for production
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <FontAwesomeIcon icon={faSign} className="text-4xl text-green-500" />
        <h3 className="text-xl font-semibold text-gray-800">
          Your <span className="font-bold">{title} expense</span> has been
          successfully added to the Expense List.
        </h3>
        <p className="text-lg text-gray-600">
          Total:{" "}
          <span className="font-semibold text-gray-900">{total} Kyats</span>
        </p>
        <Link href="/">
          <Button
            color="default"
            variant="ghost"
            size="lg"
            className="mt-4"
            endContent={<FontAwesomeIcon icon={faHome} id="home icon" />}>
            Home
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default Successmodal;
