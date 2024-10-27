import {
  faBurger,
  faCartShopping,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState();
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);

    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleSelectType = (key) => {
    switch (key) {
      case "F&B":
        setType("F&B");
        break;
      case "Shopping":
        setType("Shopping");
        break;
      case "Family & Friend":
        setType("Family & Friend");
        break;
      default:
        setType("");
        break;
    }
  };

  const handleSubmit = () => {
    if (title == "" || amount == "" || type) {
      const notify = () => toast("Please fill the data!");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      type,
    };

    return dispatch(addExpense(data));
  };

  return (
    <div className="m-auto w-1/2 mt-3">
      <ToastContainer
        closeOnClick
        position="bottom-left"
        autoClose={1500}
        pauseOnHover={false}
      />
      <div className="p-4 mt-6 border">
        <Input
          size="sm"
          label="Title"
          value={title}
          className="mb-3"
          onChange={(e) => handleTitle(e)}
        />

        <Input
          size="sm"
          label="Amount"
          value={amount}
          className="mb-3"
          onChange={(e) => handleAmount(e)}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">{type || "Select Type"}</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" onAction={handleSelectType}>
            <DropdownItem key="F&B">
              <div className="flex justify-between">
                <p>F&B</p> <FontAwesomeIcon id="F&B" icon={faBurger} />
              </div>
            </DropdownItem>
            <DropdownItem key="Shopping">
              <div className="flex justify-between">
                {" "}
                Shopping{" "}
                <FontAwesomeIcon id="shopping-cart" icon={faCartShopping} />
              </div>
            </DropdownItem>
            <DropdownItem key="Family & Friend">
              <div className="flex justify-between">
                {" "}
                Family & Friends{" "}
                <FontAwesomeIcon
                  id="family & friends"
                  icon={faPeopleGroup}
                />{" "}
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <Button
          color="default"
          variant="ghost"
          onClick={handleSubmit}
          className="mt-4">
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
