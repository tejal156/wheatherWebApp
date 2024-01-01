import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./DisplayCart.css" ;

// import AcUnitIcon from '@mui/icons-material/AcUnit';

// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function DisplayCart({ ObjInfo })
 {
    console.log(ObjInfo) ;
    const rainy_URL ="https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    let hot_URL = "https://images.unsplash.com/photo-1701351066475-e9c940315b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bm55JTIwc2Vhc29ufGVufDB8fDB8fHww" ;
    let cold_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    console.log( ObjInfo.humidity1 > 80 ? "rainy_URL" : ObjInfo.temp>15 ? "hot_URL" : "cold_URL"  )
    return (
        <>
            {/* <p>this is a display Info cart</p> */}
            <Card sx={{ maxWidth: 400 , width: 391 , textAlign:'center' , lineHeight:1.7 }} className='card1'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        // image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        image={ObjInfo.humidity1>80? rainy_URL : ObjInfo.temp>15? hot_URL : cold_URL  }
                        // image = {rainy_URL}
                    

                        alt="image"
                    />
                    <CardContent className='cardContent1'>
                        <Typography gutterBottom variant="h5" component="div">
                            { ObjInfo.city} 
                        </Typography>
                        <Typography style={{lineHeight:1.7}} className='cardEle2' variant="body2" color="text.secondary">
                            humidity : { ObjInfo.humidity1} 
                            {/* {ObjInfo.humidity1>80 ? <ThunderstormIcon /> : ObjInfo.temp>15? <WbSunnyIcon/> : <AcUnitIcon/>  } */}
                        </Typography>
                        <Typography style={{lineHeight:1.7}} className='cardEle2' variant="body2" color="text.secondary">
                            tempreture : { ObjInfo.temp}
                        </Typography>
                        <Typography className='cardEle2' variant="body2" color="text.secondary" style={{lineHeight:1.7}}>
                            max tempreture : { ObjInfo.tempMax}
                        </Typography>
                        <Typography className='cardEle2' variant="body2" color="text.secondary" style={{lineHeight:1.7}}>
                            min tempreture : { ObjInfo.tempMin}
                        </Typography> 
                        <Typography className='cardEle2' variant="body2" color="text.secondary" style={{lineHeight:1.7}}>
                            wheather is { ObjInfo.weather1} and feels like { ObjInfo.feels_like1}
                        </Typography>                       
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}