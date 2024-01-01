import SearchBox from "./searchBox";
import DisplayCart from "./DisplayCart";
import "./WeatherWeb.css" ;
import { useState } from "react";

export default function weatherWeb()
{
    let ObjInfo1= { city : "pune" ,feels_like1: 27.21, humidity1: 29 , temp: 28.22 , tempMax: 28.22 , tempMin: 28.22 , weather1: "few clouds"} ;

    const [infoObj2 , setInfoObj2] = useState(ObjInfo1) ;

    let[isError , setIsError] = useState(false) ;
    

    return(
        <>
            
            <p className="line1st">weather App</p>
            <SearchBox  setMethod1 = {setInfoObj2} setMethod2Error={setIsError}/>
            
                
            { isError?  (<p className="errorLine">There is no such place exists</p>) : (<DisplayCart  ObjInfo={infoObj2}/>) }
            
        </>
    )
}