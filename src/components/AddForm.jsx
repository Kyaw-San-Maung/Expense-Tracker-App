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
            <DropdownItem key="new">F&B</DropdownItem>
            <DropdownItem key="copy">Shopping</DropdownItem>
            <DropdownItem key="edit">Family & Friends</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default AddForm;
