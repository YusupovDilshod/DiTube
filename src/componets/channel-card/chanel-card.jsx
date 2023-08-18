import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({vidoe,marginTop}) => {

  return (
    <Box sx={{
        boxShadow:"none",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:"356px",md:"320px"},
        height:"326px",
        margin:"auto",
        marginTop:marginTop,
    }}>
      <Link to={`/channel/${vidoe?.id?.channelId ?vidoe?.id?.channelId : vidoe?.id}`}>
         <CardContent sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
         }}>
            <CardMedia 
              image={vidoe?.snippet?.thumbnails?.high?.url}
              alt={vidoe?.snippet?.title}
              sx={{
                borderRadius:"50%",
                height:"180px",
                width:"180px",
                mb:2,
                border:"1px solid #e3e3e3",
              }}>
            </CardMedia> 
            <Typography variant="h6" >
                 {vidoe?.snippet?.title} 
                 <CheckCircle sx={{fontSize:"14px",color:"gray",ml:"5px"}}/>
            </Typography>
               {vidoe?.statistics?.subscriberCount && (
                <Typography sx={{fontSize:"15px", fontWeight:500,color:"gray"}} >
                    {parseInt(vidoe?.statistics?.subscriberCount).toLocaleString("en-US")}  Subscribers
                </Typography>
               )}
        </CardContent>
    </Link>
    </Box>
  )
}

export default ChannelCard
