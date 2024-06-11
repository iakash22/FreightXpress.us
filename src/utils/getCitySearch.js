import axios from "axios"

export const getCityData = async (city) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    let cityList = [];
    try {
        const res = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&apiKey=${API_KEY}`);
        if (!res) {
            throw new Error("Not Found");
        }
        cityList = res.data?.features;
        // console.log(cityList);
    } catch (err) {
        console.log(err);
    }

    return cityList;
}