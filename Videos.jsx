import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';
import Spinner from './Spinner';
// import SK_home from './skeletons/SK_home';

export default function Videos({ videos }) {
    if(!videos?.length) return <Spinner/>;
    return (
        <>
            <Stack overflowY="auto" direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                {videos.map((item, idx) => (
                    <Box key={idx}>
                        {(item.id.videoId) && <VideoCard video={item} /> }
                        { item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))}
            </Stack>
        </>
    )
}