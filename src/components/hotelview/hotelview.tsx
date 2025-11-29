import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { hotelList } from "../../config";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImage from "../../assets/images/food.jpg";
import "./hotel.css";
import { getUserRole } from "../../utils/userdata";
import { useSelector } from "react-redux";

function Hotelview() {
  const userInfo = getUserRole();
  const params = useParams();
  const [hotel, setHotel] = useState<any>({});
  const [hotelMenuItem, setHotelMenuItem] = useState([]);
  const store = useSelector((state) => state);

  console.log("store", store);

  useEffect(() => {
    if (hotelList) {
      const filter = hotelList.find((item: any) => item.id == params.id);
      setHotel(filter);
      getItemForHotel();
    }
  }, []);


const getItemForHotel = () => {
  const menuItems = localStorage.getItem('menuItem');
  if (!menuItems) {
    setHotelMenuItem([]); // nothing found in localStorage
    return;
  }

  try {
    const parsedItems = JSON.parse(menuItems);
    const filteredItems = (parsedItems || []).filter(
      (item: any) => item.hotelId === params.id
    );
    setHotelMenuItem(filteredItems);
  } catch (error) {
    console.error("Error parsing menu items:", error);
    setHotelMenuItem([]); // fallback in case of corrupted JSON
  }
};


  const AddToCart = (menuItem: any) => {
    let prev = localStorage.getItem("cartItem"); //null
    if (prev) {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...JSON.parse(prev), { ...menuItem, userId: userInfo.id }])
      );

    } else {
      localStorage.setItem("cartItem", JSON.stringify([{ ...menuItem, userId: userInfo.id }]));
    }
  }


  return (
    <div>
      {hotel.id && <div>
        <p className="hotel-view-title">{hotel.name}</p>
        <p>Menu Items</p>
        <div className="hotel-view">
          {hotelMenuItem.length > 0 && hotelMenuItem.map((item: any) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                  <Card.Title>{item.item}</Card.Title>
                  <Card.Text>
                    {item.des}
                  </Card.Text>
                  <Button variant="primary" onClick={() => {
                    AddToCart(item);
                  }}>Add to cart</Button>
                </Card.Body>
              </Card>
            )
          })}
        </div>

      </div>

      }
    </div>
  );
}

export default Hotelview;