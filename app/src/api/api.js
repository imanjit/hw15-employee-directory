import axios from "axios";
const randomUser = "https://randomuser.me/api/?results=100";

export default {
    getData: () => axios.get(randomUser)
};