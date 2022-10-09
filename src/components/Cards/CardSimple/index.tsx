import Box from "components/Box"
import { CardSimpleWrapper, Img, Price, TextContent, Title } from "./styled"
import src from '../../../assets/products/icone.png'
import { ChartDunut } from "components/ChartDunut"
const CardSimple = () =>{
  return(
    <CardSimpleWrapper>
        <Box display='flex' direction='column' gap='6px'>
          <Title>Todays Sales</Title>
          <Price>$20.4K</Price>
          <TextContent>We have sold 123 items</TextContent>
        </Box>
      
          <ChartDunut/>
    
    </CardSimpleWrapper>
  )
}

export default CardSimple