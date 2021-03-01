const axios = require("axios");
const URL_PREFIX = "http://localhost:8080";
// const URL_PREFIX= ""

const API = {
  login: (employeeData) => {
    return axios.post(`${URL_PREFIX}/api/employee/login`, employeeData);
  },

  create: (employeeData, token) => {
    return axios.post(`${URL_PREFIX}/api/employee/signup`, employeeData, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getAllemployees: (token) => {
    console.log(token, "TOKEN");
    return axios.get(`${URL_PREFIX}/api/employee/employees`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getSingleCategoryWithProducts: (group, token) => {
    return axios.get(`${URL_PREFIX}/api/category/${group}/products`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getSingleCategoryWithProducts: (group, token) => {
    return axios.get(`${URL_PREFIX}/api/category/${group}/products`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },
};

export default API;
