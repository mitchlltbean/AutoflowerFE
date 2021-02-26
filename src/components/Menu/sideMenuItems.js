export default {
  data: [
    {
      name: "Employees",
      url: "/employees",
    },
    {
      name: "Weedvintory",
      url: "/inventory",
    },
    {
      name: "Sales",
      children: [
        {
          name: "Stats",
          url: "/stats",
        },
        {
          name: "Net-Gain",
          url: "/gains",
        },
        {
          name: "Net-Loss",
          url: "/losses",
        },
      ],
    },
    {
      name: "Other",
      children: [
        {
          name: "Thing",
          url: "/child41",
        },
        {
          name: "Horses",
          url: "/child42",
        },
        {
          name: "Molases",
          children: [
            {
              name: "Fools",
              url: "/child431",
            },
            {
              name: "Feinds",
              url: "/child432,",
            },
            {
              name: "Fido",
              url: "/child433",
            },
          ],
        },
      ],
    },
  ],
};
