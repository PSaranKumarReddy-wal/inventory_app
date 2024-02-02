import { useState } from "react";
import {
  Badge,
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

  var userInput = "'; DROP TABLE users; --";
  var query = "SELECT * FROM users WHERE username = '" + userInput + "';";
  const checking =
    input["title"] && input["description"] && input["quantity"] ? false : true;

  const formChecking = (e) => {
    e.preventDefault();
    const result = { id: id, ...input };

    setData([...data, result]);
    setId(id + 1);

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
                <Label for="exampleURL">Brand Name</Label>
                <Input
                  id="exampleURL"
                  name="description"
                  placeholder="Enter Brand"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
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

                <FormGroup style={{ marginLeft: "10px" }}>
                  <Label for="exampleEmail">Price</Label>
                  <Input
                    id="exampleEmail"
                    name="price"
                    placeholder="Enter price"
                    type="text"
                    onChange={inputValue}
                    required
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label for="exampleEmail">
                  Image Url <Badge color="danger">Optional</Badge>
                </Label>
                <Input
                  id="exampleEmail"
                  name="imageUrl"
                  placeholder="Enter ImageUrl"
                  type="url"
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
