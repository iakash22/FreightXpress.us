import axios from "axios"

export const getCityData = async (city) => {
    try {
        const res = await axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`,
            {headers : {
                'X-Api-Key' : 'MJfABAuPy6mX4DxBQDsk5w==2YyxUI1X5MWYEQBv'
            }}
        );
        if (!res) {
            throw new Error("Not Found");
        }
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}