import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/hero.jpg";
import { Box } from '@mui/material';

export default function Carousal() {
    return (
        <Box justifyContent="center" sx={{width:{sm:"100%",md:"80%"},height:{sm:"100%",md:"50%"}}} alignItems="center">
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src={img1} width="100%" height="100%"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img1} width="100%" height="100%"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={img1} width="100%" height="100%" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Box>
    );
}
