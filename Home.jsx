import { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos, NavbarHome} from './';
import { fetchFromApi } from '../utils/fetchFromApi';
// import Spinner from './Spinner';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}&type=video`)
            .then((data) => setVideos(data.items))
            
    }, [selectedCategory]);


    return (
        <div className='home' style={{ backgroundColor: "black" }}>
            <NavbarHome />
            <Stack sx={{  overflowY: "auto", flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid grey", px: { sx: 0, md: 2 } }}>
                    <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
                    {/* <Carousal /> */}
                    <Typography mb={2} sx={{ color: "yellow",fontSize:{xs:"22px",md:"30px"} }} fontWeight="bold" color='white'>
                        {selectedCategory}<span style={{ color: "white" }}> Videos</span>
                    </Typography>

                    <Videos videos={videos} />
                </Box>
            </Stack>
        </div>
    )
}