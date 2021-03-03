const axios = require("axios");
const URL_PREFIX = "http://localhost:8080";
// const URL_PREFIX= ""

const API = {
  //employee
  login: (employeeData) => {
    return axios.post(`${URL_PREFIX}/api/employee/login`, employeeData);
  },

  create: (token, employeeData) => {
    return axios.post(`${URL_PREFIX}/api/employee/create`, employeeData, {
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

  deleteEmployee: (token, id) => {
    console.log(token, "TOKEN");
    return axios.delete(`${URL_PREFIX}/api/employee/deleteemployee/${id}`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  //product
  getAllproducts: (token) => {
    console.log(token, "TOKEN");
    return axios.get(`${URL_PREFIX}/api/product/products`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  updateProducts: (token, data) => {
    console.log(token, "TOKEN");
    return axios.put(`${URL_PREFIX}/api/product/productupdate`, data, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  deleteProducts: (token, id) => {
    console.log(token, "TOKEN");
    return axios.delete(`${URL_PREFIX}/api/product/deleteinventory/${id}`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  //category
  getSingleCategoryWithProducts: (id, token) => {
    return axios.get(`${URL_PREFIX}/api/product/productsbycategory?id=${id}`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },

  getAllcategories: (token) => {
    return axios.get(`${URL_PREFIX}/api/category/allcategories`, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
  },
};

export default API;
