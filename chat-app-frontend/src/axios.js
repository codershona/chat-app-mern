// creating an instance to retrieve all the data
import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:9000'
  baseURL: "https://mechat-app-mern.herokuapp.com/",
});

export default instance;
