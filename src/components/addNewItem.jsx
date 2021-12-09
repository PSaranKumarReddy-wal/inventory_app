import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const AddingNewItem = ({ newItem, data, setData, id, setId }) => {
  const [input, setInput] = useState({});

  const checking =
    input["title"] && input["description"] && input["quantity"] ? false : true;

  const formChecking = (e) => {
    e.preventDefault();
    const result = { id: id, ...input };
    console.log("inputvalues:::", result);
    setData([...data, result]);
    setId(id + 1);
    console.log("added data::", data);
    newItem();
  };

  const inputValue = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Modal size="lg" isOpen>
        <ModalHeader
          toggle={() => {
            newItem();
          }}
        >
          Adding NewItem
        </ModalHeader>
        <ModalBody>
          <div>
            <Form
              onSubmit={(e) => {
                formChecking(e);
              }}
            >
              <FormGroup>
                <Label for="exampleTitile">Titile</Label>
                <Input
                  id="exampleTitile"
                  name="title"
                  placeholder="Enter Title"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleURL">Description</Label>
                <Input
                  id="exampleURL"
                  name="description"
                  placeholder="Enter Description"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Quantity</Label>
                <Input
                  id="exampleEmail"
                  name="quantity"
                  placeholder="Enter Quantity"
                  type="number"
                  onChange={inputValue}
                />
              </FormGroup>
              <Button
                className="btn btn-success"
                type="submit"
                disabled={checking}
              >
                Save
              </Button>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddingNewItem;
