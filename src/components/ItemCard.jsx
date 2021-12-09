import { useRef, useState } from "react";
import {
  Badge,
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

const ItemCard = ({ item, deleteItem, data, setData }) => {
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
      <Card className="mb-3 p-3">
        {/* <div>
          <UserContext.Provider
            value={{
              users: [item, deleteItem, data, setData, setUpdate, update],
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
                required
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
                required
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
                required
              />
            </FormGroup>
            <Button className="btn btn-success" type="submit">
              Save
            </Button>
          </Form>
        ) : (
          <>
            <CardTitle tag="h4">{title}</CardTitle>
            <CardText>
              <b>Brand:</b>{" "}
              <Badge color="success" pill>
                {description}
              </Badge>
            </CardText>
            <CardText>
              <b>Quantity: </b>
              <Badge color="info" pill>
                {quantity}
              </Badge>
              <br />
              <b>id: </b>
              <Badge color="info" pill>
                {id}
              </Badge>
            </CardText>
            <CardFooter>
              <div>
                <Button
                  onClick={() => {
                    deleteItem(id);
                  }}
                  className="mr-5"
                  color="danger"
                  outline
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    setUpdate(!update);
                  }}
                  className="buttonn"
                  color="info"
                  outline
                >
                  {res}
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </Col>
  );
};

export default ItemCard;
