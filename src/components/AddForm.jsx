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

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState();

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

  return (
    <div className="m-auto w-1/2 mt-3">
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
            <Button variant="bordered">Type</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              <div className="flex justify-between">
                <p>F&B</p> <FontAwesomeIcon id="F&B" icon={faBurger} />
              </div>
            </DropdownItem>
            <DropdownItem key="copy">
              <div className="flex justify-between">
                {" "}
                Shopping{" "}
                <FontAwesomeIcon id="shopping-cart" icon={faCartShopping} />
              </div>
            </DropdownItem>
            <DropdownItem key="edit">
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
      </div>
    </div>
  );
};

export default AddForm;
