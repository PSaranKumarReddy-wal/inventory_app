import { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const EditForm = ({ item, data, setData, update, setUpdate }) => {
  console.log("data", data);
  console.log("item::", item);
  console.log("update:", update);

  const [input, setInput] = useState(item);

  const formChecking = (e) => {
    e.preventDefault();
    const editedResults = data.map((item) => {
      if (item.id === input.id) {
        return input;
      } else {
        return item;
      }
    });

    console.log("edited results::", editedResults);
    setData(editedResults);
    setUpdate(!update);
  };

  const inputValue = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
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
            value={input.title}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleURL">Brand Name</Label>
          <Input
            id="exampleURL"
            name="description"
            placeholder="Enter Brand Name"
            type="text"
            onChange={inputValue}
            value={input.description}
            required
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
              value={input.quantity}
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
              value={input.price}
              required
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="exampleURL">Image Url</Label>
          <Input
            id="exampleURL"
            name="imageUrl"
            placeholder="Enter Description"
            type="text"
            onChange={inputValue}
            value={input.imageUrl}
          />
        </FormGroup>
        <Button outline color="success" type="submit">
          Save
        </Button>
        <Button
          outline
          color="danger"
          className="buttonn"
          onClick={() => {
            setUpdate(!update);
          }}
        >
          Cancel
        </Button>
      </Form>
    </>
  );
};

export default EditForm;
