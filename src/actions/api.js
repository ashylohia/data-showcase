import axios from "axios";

//import cookie from "react-cookies";

export const source = axios.CancelToken.source();
const cancelToken = source.token;
export const getRequets = async (url) => axios.get(url, { cancelToken });

// export const getRequets = async (url) => {
//   return axios.get(`${API_URL}/${url}`);
// };
