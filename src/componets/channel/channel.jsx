import {Box, Container} from "@mui/material"
import {useParams} from "react-router-dom"
import { useState,useEffect } from "react" 
import { ApiService } from "../../service/api.service"
import {ChannelCard, Vidoes} from "../index"
const Channel = () => {
    const [chanelDetail,setChanelDetail] = useState()
    const [vidoe,setVidoe] = useState([])
    const {id} = useParams()

    
  useEffect(()=>{
    const getData = async () =>{
      try{
        const datachannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChanelDetail(datachannelDetail?.items[0]) 
        const dataVidoe = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVidoe(dataVidoe?.items)
      }catch(error){
       console.log(error);
      }
     }
     getData()
  },[id])
  return (
   <Box minHeight={"95vh"} mt={"1vh"}>
    <Box>
      <Box
       width={"100%"} 
       height={"200px"} 
       zIndex={10}
        sx={{
          backgroundImage:`url(${chanelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          objectFit:"cover",
          backgroundRepeat:"no-repeat"
          
          }}/>
      <ChannelCard vidoe={chanelDetail} marginTop={"-100px"}/>
    </Box>  
    <Container maxWidth={"90%"}>
      <Vidoes videos={vidoe}/>
    </Container>
   </Box>
  )
}

export default Channel 