import { Box,Typography,styled } from "@mui/material";
import { LocationOn,DeviceThermostat,Opacity,Brightness5, Brightness6 ,Dehaze, Cloud} from "@mui/icons-material";


const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10,
    }
});

export default function Information({result}) {
    return (
        result && Object.keys(result).length > 0 ?  
        <Box style={{
            margin: '30px 60px',
        }}>
            <Row> <LocationOn/>Location: {result.name},{result.sys.country}</Row>
            <Row> <DeviceThermostat/>Temperature: {result.main.temp}°C</Row>
            <Row> <Opacity/>Humidity: {result.main.humidity}</Row>
            <Row> <Brightness5/>Sun Rise: {new Date(result.sys.sunrise*1000).toLocaleTimeString() }</Row>
            <Row> <Brightness6/>Sun Set: {new Date(result.sys.sunset*1000).toLocaleTimeString() }</Row>
            <Row> <Dehaze/>Sky: {result.weather[0].main}</Row>
            <Row> <Cloud/>Clouds: {result.clouds.all}%</Row>
        </Box>
        :
        <Box sx={{
            margin: 30,
            color: 'red'
        }}>
            <Row>Please enter city and country</Row>
        </Box>
    );
};