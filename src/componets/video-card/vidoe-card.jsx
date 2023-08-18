import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { colors } from "../../constants/coloros";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = (vidoe) => {
  let vidoes = vidoe.vidoe

  return (
    <Card sx={{width:{xs:"100%",sm:"320px",md:"320px"}, boxShadow:"none", borderRadius:0 , height:"400px"}}>
        <Link to={`/vidoe/${vidoes.id.videoId}`}>
        <CardMedia 
        image={vidoes?.snippet?.thumbnails?.high?.url} 
        alt={vidoes?.snippet?.title}
        sx={{width:{xs:"100%",sm:"320px"}, height:'180px'}}
        />
        </Link>
        <CardContent sx={{background:colors.primary, height:"200px", position:"relative"} }>
            <Link to={`/vidoe/${vidoes.id.videoId}`}>
            <Typography my={"5px"} sx={{opacity:".4"}}>
                {moment(vidoes?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
                 {vidoes?.snippet?.title.slice(0,50)}
            </Typography>
            <Typography variant="subtitle2" sx={{opacity:".6"}}>
                 {vidoes?.snippet?.description.slice(0,70)}
            </Typography>
            </Link>
            <Link to={`/channel/${vidoes?.snippet?.channelId}`}>
            <Stack direction={"row"} position={"absolute"} alignItems={"center"} gap="5px" bottom={"5px"}>
                <Avatar src={vidoes?.snippet?.thumbnails?.high?.url}/>
                <Typography variant="subtitle2" color="gray" ml={"10px"}>
                    {vidoes?.snippet?.channelTitle.slice(0,15)}
                    <CheckCircle sx={{fontSize:"12px", color:"gray",ml:"5px"}}/>
                </Typography>
            </Stack>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard