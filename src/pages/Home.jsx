import { useState } from 'react';

import Sunset from '../assets/images/sunset.jpg';
import Sunset2 from '../assets/images/sunset_2.jpg';

import { Box, styled } from '@mui/material';

import Form from '../components/Form';
import Information from '../components/Information';


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '85%',
    "@media (max-width: 768px)": {
        flexDirection: 'column',
        width: '100%',
    },
});

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '25%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
    "@media (max-width: 768px)": {
        backgroundImage: `url(${Sunset2})`,
        width: '100%',
        height: '40%',
        borderRadius: '20px 20px 0 0',
        backgroundSize: 'cover',
        
    },
});





export default function Home() {
    const [result, setResult] = useState({});

    return (
        <Component className='Component'
        >
            <Image className='Img'></Image>
            <Box sx={{
                width: '75%',
                height: '80%',
            }}>
                <Form setResult={setResult}
                    sx={{
                        "@media (max-width: 768px)": {
                            width: '100%',
                            height: '60%',
                        },
                    }}
                />
                <Information result={result}/>
            </Box>
        </Component>
    );
}