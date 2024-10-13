import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json)//string me data aara json me convert kar diya
        .then((res)=>setdata(res[currency]))
    },[currency])
    return data
}
export default useCurrencyInfo