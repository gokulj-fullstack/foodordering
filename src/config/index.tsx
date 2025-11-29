import { sideBarType } from "../types";
import { faGrip, faCartShopping, faHistory, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

export const sideBarNavItems: sideBarType[] = [
  {
    path: "/dashboard",
    access: ["HOTEL_MANAGEMENT", "CUSTOMER"],
    title: "Dashboard",
    icon: faGrip,
  },
  {
    path: "/cart",
    access: ["CUSTOMER"],
    title: "Cart",
    icon: faCartShopping,
  },
  {
    path: "/create-order",
    title: "Create Order",
    access: ["HOTEL_MANAGEMENT"],
    icon: faBookBookmark,
  },
  {
    path: "/total-order",
    title: "Total Order",
    access: ["HOTEL_MANAGEMENT"],
    icon: faHistory,
  },
];

export const users = [
  {
    id: 1,
    name: "Hotel Manager",
    role: "HOTEL_MANAGEMENT",
    email: "hotel@gmail.com",
    pass: 123,
    mob: "9876543211",
  },
  {
    id: 2,
    name: "Customer",
    role: "CUSTOMER",
    email: "cus@gmail.com",
    mob: "9876543210",
    pass: 321,
  },
  {
    id: 3,
    name: "Aravind",
    role: "CUSTOMER",
    email: "cuss@gmail.com",
    mob: "9876543210",
    pass: 321,
  },
  {
    id: 4,
    name: "test",
    role: "CUSTOMER",
    email: "test@gmail.com",
    mob: "9876543210",
    pass: 321,
  },
];

export const hotelList = [
  {
    id: 1,
    name: "Star Briyani",
    des: "",
    menuItem: [],
  },
  {
    id: 2,
    name: "SS Hyd",
    des: "",
    menuItem: [],
  },
  {
    id: 3,
    name: "Geetham",
    des: "",
    menuItem: [],
  },
  {
    id: 4,
    name: "Zaitoon",
    des: "",
    menuItem: [],
  },
  {
    id: 5,
    name: "Nahdimandi",
    des: "",
    menuItem: [],
  },
];