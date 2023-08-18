import {Link, useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import { ApiService } from "../../service/api.service"
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material"
import ReactPlayer from "react-player"
import { CheckCircle, Tag, Visibility } from "@mui/icons-material"
import Loader from "../loader/loader"
import { Vidoes } from "../index"

const VideoDetail = () => {
  const {id} = useParams()
  const [vidoeDetail,setVidoesDetail]= useState()
  const [ relatedVidoe,setRelatedVidoe]= useState([])

  useEffect(()=>{
    const getData = async () =>{
      try{
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setVidoesDetail(data?.items[0]) 
        const relatedData = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setRelatedVidoe(relatedData?.items)
      }catch(error){
       console.log(error);
      }
     }
     getData()
  },[id])

  if(!vidoeDetail?.snippet) return <Loader/>

  return (
   <Box minHeight={"90vh"} mb={10}>
    <Box display={"flex"} sx={{flexDirection:{xs:"column",md:"row"}}}>
      <Box width={{xs:"100%",md:"75%"}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
        {vidoeDetail?.snippet?.tags?.map((item,idx)=>(
          <Chip
          label={item}
          key={idx}
          sx={{marginTop:"10px",cursor:"pointer",ml:"10px"}}
          deleteIcon={<Tag/>}
          onDelete={()=>{}}
          variant="outlined"   
          />
        ))}
        <Typography variant="h5" fontWeight={"bold"} p={2}>
          {vidoeDetail?.snippet?.title}
        </Typography>
        <Typography variant="subtitle2" p={2} sx={{opacity:".7"}}>
          {vidoeDetail?.snippet?.description}
        </Typography>
        <Stack direction={"row"} gap="20px" alignItems="center" py={1} px={2}>
           <Stack sx={{opacity:"0.7"}} direction={"row"} alignItems={"center"} gap="3px">
              <Visibility/>
              {parseInt(vidoeDetail?.statistics?.viewCount).toLocaleString()} views
           </Stack>
           <Stack sx={{opacity:"0.7"}} direction={"row"} alignItems={"center"} gap="3px">
              <Visibility/>
              {parseInt(vidoeDetail?.statistics?.likeCount).toLocaleString()} likes
           </Stack>
           <Stack sx={{opacity:"0.7"}} direction={"row"} alignItems={"center"} gap="3px">
              <Visibility/>
              {parseInt(vidoeDetail?.statistics?.commentCount).toLocaleString()} comments
           </Stack>
        </Stack>
        <Stack direction={"row"} py={1} px={2}> 
         <Link to={`/channel/${vidoeDetail?.snippet?.channelId}`}>
           <Stack  direction={"row"} alignItems={"center"} gap="5px" marginTop="5px" >
              <Avatar
               alt={vidoeDetail?.snippet?.channelTitle}
               src={vidoeDetail?.snippet?.thumbnails?.default?.url}
              />
              <Typography variant="subtitle2" color="gray">
                 {vidoeDetail?.snippet?.channelTitle}
                 <CheckCircle  sx={{fontSize:'12px',color:"gray",ml:"5px"}} />
              </Typography>
           </Stack>
           </Link>
        </Stack>
        
      </Box>
      <Box 
      width={{xs:"100%",md:"25%"}}
      px={2}
      py={{md:1,xs:5}}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"scroll"} 
      minHeight={"120vh"}     
      >
        <Vidoes videos={relatedVidoe}/>
      </Box>
    </Box>
   </Box>
  )
}

export default VideoDetail



