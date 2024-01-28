import axios from "axios";

const apiCall = async (path, config) => {
  try {
    const url = window.location.origin.includes("localhost") ?`http://localhost:3000${path}` : `https://pwrgiole6d.execute-api.us-west-2.amazonaws.com/prod${path}`;
    const axiosConfig = {
      ...config,
      url,
      headers: {
        "x-api-key": "0GkaWfk5D16v7v0mfEY2u756XI364jKK4MJJIOFa",
      },
    };
    const response = await axios(axiosConfig);
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiCall;
