import axios from "axios"

export const httpGet = async (url) => {
    return await axios.get(url);
}