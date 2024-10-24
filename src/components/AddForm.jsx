import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";

const AddForm = () => {
  return (
    <div className="m-auto w-1/2 mt-3">
      <div className="p-4 mt-6 border">
        <Input size="sm" label="Title" className="mb-3" />

        <Input size="sm" label="Amount" className="mb-3" />
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
