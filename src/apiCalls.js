import axios from "axios";

const API_BASE_URL = "https://script.google.com/macros/s/AKfycby0R553CWyrJSK59AO3XqOUJBS_HuivV5d2Y8fNffiZjcKAZtbDIepsykM4BZgjHRNHuQ/exec";

export const getTranslate = (body) => {
    return axios.post(API_BASE_URL, body, {
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }
      });
};