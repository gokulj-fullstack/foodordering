import { Route, Routes } from "react-router";
import { getUserRole } from "../utils/userdata";
import Dashboard from "../components/dashboard/dashboard";
import Hotelview from "../components/hotelview/hotelview";
import Cart from "../components/cart/cart";
import CreatOrder from "../components/createorders/createOrder";
import Unauthorized from "../common/unauthorized/unauthorizes";
import TotalOrder from "../components/totalorders/totalorder";
import Login from "../common/login/login";


function Router() {
  const userInfo: any = getUserRole();
  const RouterLink = [
    {
  path: "/login",
  component: <Login />,
  access: ["HOTEL_MANAGEMENT", "CUSTOMER"], 
},

    {
      path: "/dashboard",
      component: <Dashboard />,
      access: ["HOTEL_MANAGEMENT", "CUSTOMER"],
    },
    {
      path: "/hotel-view/:id",
      component: <Hotelview />,
      access: ["CUSTOMER"],
    },
    {
      path: "/cart",
      component: <Cart />,
      access: ["CUSTOMER"],
    },
    {
      path: "/create-order",
      component: <CreatOrder />,
      access: ["HOTEL_MANAGEMENT"],
    },
    {
      path: "/total-order",
      component: <TotalOrder />,
      access: ["HOTEL_MANAGEMENT"],
    },
    {
      path: "/*",
      component: <Unauthorized />,
      access: [],
    },
  ];

  return (
    <Routes>
      {RouterLink.map((item) => {
        if (item.access.includes(userInfo.role)) {
          return <Route path={item.path} element={item.component}></Route>;
        } else {
          return (
            <Route path={item.path} element={<div>Unauthorized</div>}></Route>
          );
        }
      })}
    </Routes>
  );
}

export default Router;