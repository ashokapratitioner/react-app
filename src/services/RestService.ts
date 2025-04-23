import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const getRequest = (endpoint: string) => {
  return axios
    .get(`${baseUrl}${endpoint}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

const postRequest = (endpoint: string, data: object) => {
  return axios
    .post(`${baseUrl}${endpoint}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

const patchRequest = (endpoint: string, data: object) => {
  return axios
    .patch(`${baseUrl}${endpoint}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

const deleteRequest = (endpoint: string) => {
  return axios
    .delete(`${baseUrl}${endpoint}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export { getRequest, postRequest, patchRequest, deleteRequest };
