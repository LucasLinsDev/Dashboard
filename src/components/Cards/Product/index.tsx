import Box from "components/Box";
import Row from "components/Row";
import { ButtonAddToCard, ProductCardWrapper, ProductImage, SalerOption, Subtitle, Title } from "./styles";
import product from '../../../assets/products/ps5.jpg'
import { HiPencil, HiShoppingCart } from "react-icons/hi";

const ProductCard= () =>{
  return(
    <ProductCardWrapper>
     <Row display='flex' >
      <Box  flex={1}>
        <Title>Pooma</Title>
        <Subtitle>Skate Shoes</Subtitle>
      </Box>
      <Box display="flex" justify='flex-end'  text_align="center" flex={1} align="center"><SalerOption>Best Seller</SalerOption></Box>
     </Row>
     <Row>
        <ProductImage>
             <img src={product}/>
        </ProductImage>
     </Row>
      <Row display='flex' >
      <Box  flex={1}>
        <Title>Pooma</Title>
        <Subtitle>Skate Shoes</Subtitle>
        <ButtonAddToCard><HiPencil/></ButtonAddToCard>
      </Box>
     </Row>
    </ProductCardWrapper>
  )
}

export default ProductCard;