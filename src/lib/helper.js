import axios from "axios";
import { API_URL, DEFAULT_HEADER } from "./constants";
import { getLocation } from "./getLocation";

export const getVisitor = async () => {
    let location = getLocation();

    try {
        const { data } = await axios.get(
            `${API_URL}/api/zimomeet_app/news-visitors?lat=${location.latitude}&lng=${location.longitude}`,
            {
                headers: DEFAULT_HEADER,
            }

        );
        localStorage.setItem("visitor", JSON.stringify(data));
        console.log(data);
        return data;
    } catch (error) {
        console.log('error while fetching visitor')
    }
}