import axios from "axios";

const GetDataApi = (url) => {
return axios.get(url);  
};

export default GetDataApi;