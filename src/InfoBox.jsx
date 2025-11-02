import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ result }) {
    let hot_url = "/static/images/hot.jpg";
    let cold_url = "/static/images/cold.jpg";
    let rain = "/static/images/rain.jpg"
    let img =  result.humidity>90?rain :result.feels_like > 25 ? hot_url : cold_url;
    return (
        <>

            <div className="WeatherInfo">
                <Card sx={{ maxWidth: 345 }} style={{border: "1px solid black"}}>
                    <CardMedia
                        component="img"
                        height="194"
                        width="300"
                        src= {img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {result.city}
                            {result.humidity>90?<ThunderstormIcon /> :result.feels_like > 25 ? <SunnyIcon/>  :<AcUnitIcon /> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>
                                <div>humidity :{result.humidity}</div>
                                <div>feels like : {result.feels_like}</div>
                                <div>pressure : {result.pressure}</div>
                                <div>temprature Min : {result.temp_max}&deg;</div>
                                <div>temprature Max : {result.temp_min}&deg;</div>
                            </div>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>

    );
}