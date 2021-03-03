import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

export const sideMenuItems = [
  {
    name: "Home",
    url: "/dashboard",
    icon: <GiIcons.GiWoodCabin />,
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
    icon: <GiIcons.GiWallet />,
    className: "nav-text",
  },
  {
    name: "Manage Products",
    url: "/products",
    icon: <FaIcons.FaSitemap />,
    className: "nav-text",
  },
  {
    name: "Statistics(Later)",
    url: "/stats",
    icon: <FaIcons.FaPercent />,
    className: "nav-text",
  },

  {
    name: "Orders",
    url: "/orders",
    icon: <FiIcons.FiPackage />,
    className: "nav-text",
  },
  // {
  //   name: "Logout",
  //   url: "/",
  //   icon: <IoIcons.IoMdPeople />,
  //   className: "nav-text",
  // },
];

// export default {
//   data: [
//   ],
// };

// path: {
//   () => {
//     handleLogout;
//   };
// }
