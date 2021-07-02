import axios from "axios";

//import cookie from "react-cookies";


export const getRequets = async (url) => axios.get(url);

// export const getRequets = async (url) => {
//   return axios.get(`${API_URL}/${url}`);
// };
