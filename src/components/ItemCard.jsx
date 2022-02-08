import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import EditForm from "./editForm";

const ItemCard = ({ item, deleteItem, data, setData }) => {
  const { title, description, quantity, id, imageUrl, price } = item;

  const [update, setUpdate] = useState(false);

  return (
    <Col sm="4" xs="12" lg="3">
      <Card className="mb-3 p-3">
        {update ? (
          <EditForm
            item={item}
            setData={setData}
            data={data}
            update={update}
            setUpdate={setUpdate}
          />
        ) : (
          <>
            <div className="imgContainer">
              <CardImg
                alt={imageUrl ? "Wrong Image Link " : "not found"}
                src={
                  imageUrl
                    ? imageUrl
                    : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                }
                top
                className="imageSize"
              />
            </div>
            <CardTitle tag="h5" style={{ fontWeight: 700 }}>
              {title.toUpperCase()}
            </CardTitle>
            <CardText>
              <b>Brand:</b> <Badge color="success">{description}</Badge>
              <br />
              <b>Quantity: </b>
              <Badge color="info" pill>
                {quantity > 0 ? quantity : "Out of Stock"}
              </Badge>
              <br />
              <b>Price: </b>
              <Badge color="info">₹{price}</Badge>
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
                  Edit
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
