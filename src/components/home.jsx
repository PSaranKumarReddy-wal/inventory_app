import { useState } from "react";
import { Container, FormGroup, Input, Row } from "reactstrap";
import AddingNewItem from "./addNewItem";
import ItemCard from "./ItemCard";

const Home = () => {
  const inventData = [
    {
      id: 1,
      title: "Mac Book Pro",
      quantity: "10",
      description: "Apple",
      price: "1,20,000",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
    },
    {
      id: 2,
      title: "Hp Laptop",
      quantity: "18",
      description: "Hp",
      price: "53,000",
      imageUrl:
        "https://5.imimg.com/data5/HI/LO/MY-24587489/hp-laptop-500x500.jpg",
    },
    {
      id: 3,
      title: "one plus",
      quantity: "40",
      description: "onePlus",
      price: "25,000",
      imageUrl:
        "https://www.gizmochina.com/wp-content/uploads/2020/03/OnePlus-8-1.jpg",
    },
  ];
  const [id, setId] = useState(4);
  const [data, setData] = useState(inventData);

  const [addItem, setAddItem] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const newItem = () => {
    setAddItem(!addItem);
  };
  const deleteItem = (id) => {
    const filterData = data.filter((item) => item.id !== id);

    setData(filterData);
  };
  const searchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      {addItem && (
        <AddingNewItem
          newItem={newItem}
          data={data}
          setData={setData}
          id={id}
          setId={setId}
        />
      )}
      <h1 className="text-center headTitle text-info">Inventory Application</h1>
      <Container>
        <div className="navbaar">
          <button className="btn btn-info" onClick={newItem}>
            Add Item
          </button>

          <FormGroup
            style={{ marginLeft: "10px", width: "250px", marginTop: "15px" }}
          >
            <Input
              id="exampleEmail"
              name="price"
              placeholder="Search Items"
              type="text"
              onChange={searchInput}
            />
          </FormGroup>
        </div>

        <Row>
          {data.length ? (
            data
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  data={data}
                  setData={setData}
                />
              ))
          ) : (
            <h1>No items</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
