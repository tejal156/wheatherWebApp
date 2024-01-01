import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox( {setMethod1 , setMethod2Error})
{
    let[cityName , setCityName] = useState("") ;
    let[cityNameFinal , setCityNameFinal] = useState("") ;
    
    // console.log("cityNAmeFinal: " , cityNameFinal) ;

    let getWheatherInfo = async() =>
    {


        try
        {
            const APIkey = "fdb15324b3cde98c6b785f13d0bab5fd" ;
            // const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}` ;
            const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric` ;
            console.log(ApiUrl) ;
    
            let res =await fetch(ApiUrl) ;
            let dataMain =await res.json() ;
            console.log(dataMain) ;
    
            let result = 
            {
                city : cityName,
                temp : dataMain.main.temp ,
                tempMin : dataMain.main.temp_min ,
                tempMax : dataMain.main.temp_max ,
                humidity1 : dataMain.main.humidity ,
                feels_like1 : dataMain.main.feels_like ,
                weather1 : dataMain.weather[0].description ,
            }
            console.log(result) ;
            setMethod2Error(false) ;
            return result ;
        }
        catch(err)
        {
            console.log("there is a error1") ;
            setMethod2Error(true) ;
            throw err ;
        }
    }

    function handleCityName(event)
    {
        setCityName(event.target.value) ;
    }


    let handleSubmitCityName = async(event) =>
    {
        event.preventDefault() ;
        setCityNameFinal(cityName) ;
        // console.log(cityNameFinal) ;
        try
        {
            let data2 = await getWheatherInfo() ;  
            setMethod1(data2 ) ;

        }
        catch(err)
        {
            console.log("there is an error2") ;
            // setIsError(true) ;
            setMethod2Error(true) ;
        }
        
        setCityName("") ;  
        


    }
    
    
    return(
        <>
            <div className="projectBody">
            <br />

            <form onSubmit={handleSubmitCityName}>
                <TextField id="outlined-basic" label="city" variant="outlined" value = {cityName} onChange={handleCityName}/>
                <br />
                <br />
                <Button variant="contained"  type="submit">search</Button>
            </form>
            </div>
        </>
    )
}