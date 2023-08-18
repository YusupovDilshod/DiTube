import { Box, CircularProgress, Stack } from "@mui/material"

const Loader = () => {
  return (
   <Box minHeight={"90vh"}>
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} height={"65vh"}>
         <CircularProgress style={{width:"100px", height:"100px"}}/>
    </Stack>
   </Box>
  )
}

export default Loader