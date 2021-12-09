import { useContext, useState } from "react";
import UserContext from "./context";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const EditForm = () => {
  const { users } = useContext(UserContext);
  const [data, item, setData, setUpdate, update] = users;
  console.log("data", data);
  console.log("item::", item);
  console.log("update:", update);
  const { title, description, quantity, id } = item;
  const [input, setInput] = useState({
    title: title,
    description: description,
    quantity: quantity,
  });

  const formChecking = (e) => {
    e.preventDefault();
    const result = { ...input };
    const editedResults = data.map((item) => {
      if (item.id === id) {
        item.title = result.title;
        item.description = result.description;
        item.quantity = result.quantity;
        return item;
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
            value={input.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleURL">Quantity</Label>
          <Input
            id="exampleURL"
            name="quantity"
            placeholder="Enter Description"
            type="number"
            onChange={inputValue}
            value={input.quantity}
          />
        </FormGroup>
        <Button className="btn btn-success" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
};

export default EditForm;
