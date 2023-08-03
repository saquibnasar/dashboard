import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // console.log(response.status);
    // if (response.status === 201) {
    //   window.location.href = window.location.href;
    // }
    return response;
  },
  async function (error) {
    // console.log(error.response.status);
    if (error.response.status == 401) {
      axios
        .post("http://192.168.1.8:3005/auth/refresh-token", {
          refreshToken: window.localStorage.getItem("refreshToken"),
        })
        .then(async (res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          return await axios.request(error.config);
        })
        .catch((err) => {
          window.location.href = "/login";
        });
    }

    return Promise.reject(error);
  }
);

root.render(<App />);

reportWebVitals();
