import axios from "axios";

export const menuReq = axios.create({
    baseURL: 'https://frosty-wood-6558.getsandbox.com:443/dishes'
})