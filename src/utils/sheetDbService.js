import axios from "axios";
import { format } from 'date-fns';

export const createSheetData = async (URL,userData,setSuccessMsg,setErrorMsg) => {
    const responseTimeAndDate = {
        "receive date": format(new Date(), 'dd/MM/yyyy'),
        "receive time": format(new Date(Date.now()), "h':'m':'s")
    }
    // console.log(responseTimeAndDate);
    const data = { ...userData, ...responseTimeAndDate };
    try {
        const res = await axios.post(URL,
            data
        );
        if (!res) {
            throw new Error("Data not fetch");
        }
        setSuccessMsg("Query Send Successfull.")
        // console.log(res);
    } catch (err) {
        // console.log(err);
        setErrorMsg(err.message);
    }
}