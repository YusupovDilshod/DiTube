import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import {colors} from "../../constants/coloros"
import {Vidoes} from "../index"
const Search = () => {
  const [vidoes , setVidoes ]= useState([])
  const {id} = useParams()

  useEffect(()=>{
    const getData = async () =>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVidoes(data.items) 
      }catch(error){
       console.log(error);
      }
     }
     getData()
  },[id])
  return (
    <Box p={2}  sx={{height:"10vvh"}} >
      <Container maxWidth="90%">
        <Typography variant="h4" fontWeight={"bold"} mb={2}>
            Search results for <span style={{color:colors.secondary}}>{id}</span> vidoes
        </Typography>
        <Vidoes videos={vidoes} />
      </Container>
    </Box>
  )
}

export default Search