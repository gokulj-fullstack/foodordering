import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { hotelList } from "../../config";
import { Button, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function CreatOrder() {
  const [hotel, setHotel] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [menuItem, setMenuItemTable] = useState([]);

  useEffect(() => {
    setMenuItem();
  }, [])

  const setMenuItem = () => {
    let items = localStorage.getItem('menuItem');
    if (items) {
      setMenuItemTable(JSON.parse(items));
    }
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const createOrder = () => {
    let prev = localStorage.getItem("menuItem");
    let orderTemplate = {
      id: getRandomInt(1, 20000),
      item: item,
      price: price,
      hotelId: hotel,
    };
    if (prev) {
      localStorage.setItem(
        "menuItem",
        JSON.stringify([...JSON.parse(prev), orderTemplate])
      );
      setMenuItem();
    } else {
      localStorage.setItem("menuItem", JSON.stringify([orderTemplate]));
      setMenuItem();
    }
  };

  return (
    <section className="create-order">
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          createOrder();
        }}
      >
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Select Hotel
          </Form.Label>
          <Col sm="10">
            <Form.Select
              aria-label="Default select example"
              required
              onChange={(event) => {
                setHotel(event.target.value);
              }}
            >
              <option>Open this select menu</option>
              {hotelList.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Menu Item
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              required
              onChange={(event) => {
                setItem(event.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            price
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              required
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Item
        </Button>
      </Form>
      <div style={{ padding: 20 }}>
        {menuItem.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Hotel Id</th>
                <th>Menu Item</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {menuItem.map((item: any, index) => {
                console.log(item);
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.hotelId}</td>
                    <td>{item.item}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </div>

    </section>
  );
}

export default CreatOrder;