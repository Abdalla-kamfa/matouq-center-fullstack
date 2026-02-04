// src/constants.ts

const API_BASE_URL = window.location.hostname === "localhost"
    ? "http://localhost:8080"                         // Laptop
    : "https://matouq-center-fullstack.onrender.com"; // Cloud

export default API_BASE_URL;