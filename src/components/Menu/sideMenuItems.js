// TODO Methinks that this is where one would call the pages made for each menu item

// When user makes an account hordcode evryone as a user and figure out how to make these users an admin
// name, url, adminOnly: true/false

export default {
  data: [
    {
      // Tried imorting the component itself to the page, only made the list vanish
      name: "Employees",
      url: "/employees",
    },
    {
      name: "Sales",
      url: "/sales",
    },
    {
      name: "Manage Products",
      url: "/products",
    },
    {
      name: "Statistics",
      url: "/stats",
    },

    {
      name: "Orders",
      url: "/orders",
    },
  ],
};
