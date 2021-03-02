import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sideMenuItems = [
  {
    name: "Home",
    url: "/dashboard",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    // Tried imorting the component itself to the page, only made the list vanish
    name: "Employees",
    url: "/employees",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    name: "Sales",
    url: "/sales",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    name: "Manage Products",
    url: "/products",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    name: "Statistics(Later)",
    url: "/stats",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },

  {
    name: "Orders",
    url: "/orders",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
];

// export default {
//   data: [
//   ],
// };
