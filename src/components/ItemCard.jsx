import { useRef, useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import UserContext from "./context";
import EditForm from "./editForm";

const ItemCard = ({ item, deletItem, data, setData }) => {
  const { title, description, quantity, id } = item;
  const [input, setInput] = useState({
    title: title,
    description: description,
    quantity: quantity,
  });
  const [update, setUpdate] = useState(false);
  const res = update ? "update" : "Edit";

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
    <Col sm="4" xs="12" lg="3">
      <Card className="mb-3 text-center">
        {/* <div>
          <UserContext.Provider
            value={{
              users: [item, deletItem, data, setData, setUpdate, update],
            }}
          >
            <EditForm />
          </UserContext.Provider>
        </div> */}
        {update ? (
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
        ) : (
          <>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>Description:{description}</CardText>
            <CardText>
              Quantity:{quantity} id:{id}
            </CardText>
            <CardFooter>
              <Button
                onClick={() => {
                  deletItem(id);
                }}
                className="mr-5"
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  setUpdate(!update);
                }}
                className="ml-5"
              >
                {res}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </Col>
  );
};

export default ItemCard;
