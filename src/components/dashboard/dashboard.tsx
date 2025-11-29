import { hotelList } from "../../config";
import { getUserRole } from "../../utils/userdata";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImage from "../../assets/images/food.jpg";
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { dashboardSlice } from "../../redux/dashboardSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const userInfomation = getUserRole();
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  console.log("store", store);

  useEffect(() => {
    console.log('Hook Called!');
    dispatch(dashboardSlice.actions.updateDashboardState());
  }, [])

  const navigateToHotel = (hotelId: any) => {
    navigate('/hotel-view/${hotelId}');
  };

  if (userInfomation.role === "CUSTOMER") {
    return (
      <section className="main-content">
  <div className="dashboard-cus-hotel-list">
    {hotelList.map((item) => (
      <Card key={item.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={CardImage} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.des}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`/hotel-view/${item.id}`)}
          >
            View More
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</section>

    )
  }

  return (
    <div>
      dashboard
    </div>
  );
}

export default Dashboard;