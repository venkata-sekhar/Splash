import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { Box, Card, CardMedia, CardContent, Stack } from '@mui/material';

export default function SK_home({ videos }) {
    return (
        <>
            <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                {videos.map((_, idx) => (
                    <Box key={idx}>
                        <Card sx={{ width: { md: '355px', sm: "100%" } }}>
                            <CardMedia sx={{ width: { sx: { sm: 370, md: 358 } }, height: 170 }} />
                            <Skeleton baseColor='#adb8b0' highlightColor='grey' />
                            <CardContent sx={{ backgroundColor: '#1e1e1e', height: "100px" }}>
                                <Stack direction="row" spacing={2} sx={{ backgroundColor: '#1e1e1e' }}>
                                    <Box sx={{ backgroundColor: '#1e1e1e' }}>
                                        <Skeleton baseColor='#adb8b0' highlightColor='grey' />
                                    </Box>
                                    <Box sx={{ backgroundColor: '#1e1e1e' }}>
                                        <Skeleton baseColor='#adb8b0' highlightColor='grey' />
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Stack>
        </>

    )

}