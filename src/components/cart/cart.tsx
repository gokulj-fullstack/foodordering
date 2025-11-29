import React, { useEffect, useState } from "react";
import './cart.css'
import { Button, Card } from "react-bootstrap";
import CardImage from "../../assets/images/food.jpg";
import { getUserRole } from "../../utils/userdata";

function Cart() {
  const userInfo = getUserRole();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems();
  }, [])

  const getCartItems = () => {
    let cartItem: any = localStorage.getItem('cartItem');
    if (cartItem) {
      let filter = JSON.parse(cartItem).filter((item: any) => item.userId === userInfo.id)
      setCartItems(filter);
    }
  }

  const removeCartItems = (data: any) => {
    let cart: any = cartItems.filter((item: any) => item.id !== data.id);
    setCartItems(cart);
    localStorage.setItem('cartItem', JSON.stringify(cart));
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {cartItems.length > 0 ? cartItems.map((item: any) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CardImage} />
            <Card.Body>
              <Card.Title>{item.item}</Card.Title>
              <Card.Text>
                {item.des}
              </Card.Text>
              <Button variant="primary" onClick={() => {
                removeCartItems(item);
              }}>Remove</Button>
            </Card.Body>
          </Card>
        )
      }) : <div>No Cart Item</div>}
    </div>
  );
}

export default Cart;