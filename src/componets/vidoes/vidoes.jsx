import { Box, Stack } from "@mui/material";
import {VideoCard,ChannelCard,Loader} from "../index"
const Vidoes = ({videos}) => {
if(!videos.length) return <Loader/>

  return (
    <Stack width={"100%"} direction={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} gap={2} >
     {videos.map((item)=>(
        <Box key={item.id.videoId}>
          {item.id.videoId &&  <VideoCard vidoe={item} />}
          {item.id.channelId &&  <ChannelCard vidoe={item}/>}
        </Box>
     ))}
    </Stack>
  )
}

export default Vidoes