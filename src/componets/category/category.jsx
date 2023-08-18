import { Stack } from "@mui/material"
import {category} from "../../constants/index"
import { colors } from "../../constants/coloros"

const Category = ({setSelectedCategoryHandler, selectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{overflowX:"scroll"}}>
       {category.map(item=>(
        <button 
        key={item.name}
        className="category-btn"
        style={{borderRadius:"0" , background: item.name=== selectedCategory && colors.secondary,
        color:item.name===selectedCategory &&colors.primary}}
        onClick={() => setSelectedCategoryHandler(item.name)}
       >
            <span style={{color:item.name !== selectedCategory ? colors.secondary:colors.primary, marginRight:"15px"}}>{item.icon}</span>
            <span style={{opacity:"1"}}>{item.name}</span>
        </button>
       ))}
    </Stack>
  )
}

export default Category