import { useState } from "react";

import { Box, InputBase, Button, styled } from "@mui/material";

import { getWeather } from "../services/api";

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10,
    "@media (max-width: 768px)": {
        padding: 5,
    },
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18,
});

const GetButton = styled(Button)({
    background: '#e67e22',
});

export default function Form({setResult}) {

    const [data, setData] = useState({ city: '', country: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    };
    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    };
    return (
        <Container>
            <Input
                placeholder="City"
                name='city'
                onChange={handleChange}
            />
            <Input
                placeholder="Country"
                name='country'
                onChange={handleChange}
            />
            <GetButton
                variant="contained"
                onClick={getWeatherInfo}
            >Get Weather</GetButton>
        </Container>
    );
};