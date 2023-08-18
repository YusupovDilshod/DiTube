import {Box, Container, Stack, Typography} from "@mui/material"
import { useEffect, useState } from "react"
import {colors} from "../../constants/coloros"
import {Category, Vidoes} from "../index"
import { ApiService } from "../../service/api.service.js"

const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState("Spider-man-3");
  const [vidoes,setVidoes] = useState([]);
  const setSelectedCategoryHandler = category => setSelectedCategory(category)
  console.log(vidoes);

  //  ApiService.fetching('search').then((item)=>setVidoes(item))
 useEffect(()=>{
   const getData = async () =>{
    try{
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
      setVidoes(data.items) 
    }catch(error){
     console.log(error);
    }
   }
   getData()
 },[selectedCategory])
 
  return (
      <Stack>
        <Category setSelectedCategoryHandler={setSelectedCategoryHandler} selectedCategory={selectedCategory}/>
        <Box p={2} sx={{height:"90vh"}}>
          <Container maxWidth={"90%"}>
            <Typography variant="h4" fontWeight={"bold"} mb={2}>
              {selectedCategory} <span style={{color:colors.secondary}}>Vidoes</span>
            </Typography>
            <Vidoes videos={vidoes} />
          </Container>
        </Box>
      </Stack>
  )
}

export default Main