import { getRequets, postRequets } from "./api";


export const fetchUserData = async url => {
    return await getRequets(url)
}