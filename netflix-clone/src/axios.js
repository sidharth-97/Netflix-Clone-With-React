import axios from "axios";
import { base_url } from "./utils/constants";

const instance = axios.create({
    baseURL:base_url
})

export default instance;