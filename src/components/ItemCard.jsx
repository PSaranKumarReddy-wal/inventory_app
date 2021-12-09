import { Button, Card, CardFooter, CardText, CardTitle, Col } from "reactstrap";

const ItemCard = ({ item, deletItem }) => {
  const { title, description, quantity, id } = item;
  const [editing]
  return (
    <Col sm="4" xs="12" lg="3">
      <Card>
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
          >
            Delete
          </Button>
          <Button className="">Update</Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ItemCard;
