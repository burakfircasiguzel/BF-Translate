import axios from "axios";

export const API_BASE_URL = "https://script.google.com/macros/s/AKfycbz8ftKh3cHAHFXYAX2ku6rYnNBXmFK7c2sNAWMgg37EYCOe9LIcXZHeRX1dHeimf48h/exec";

export const getTranslate = (body) => {
    return axios.post(API_BASE_URL, body, {
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }
      });
};