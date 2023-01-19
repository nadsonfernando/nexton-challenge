import axios from "axios";

export const Api = axios.create({
  baseURL: "https://ba6gijdps7.execute-api.us-east-1.amazonaws.com/",
});
