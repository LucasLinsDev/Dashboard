import React,{useState,useEffect} from 'react';
import Box from "components/Box"
import ProductCard from "components/Cards/Product"
import Container from "components/Container"
import Nav from "components/Nav"
import Row from "components/Row"
import { HiAdjustments, HiChevronDown, HiMenu, HiViewGrid } from "react-icons/hi"
import { IconeBox, Option, PaginationBox, ProductsWrapper, ProductTable, Select, Table, TBody, Td, Th, Thead, Title, Tr } from "./styles"
import ps5 from '../../assets/products/ps5.jpg'
import Button from 'components/Buttons';
import { FiPlus } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { products } from 'libs/http/product/product';
import { Products as ProductsLib } from 'libs/http/product/product.types';
import ReactPaginate from 'react-paginate';

const Products = () =>{

  const [show,setShow]=useState(false);
  const [pageNumber,setPageNumber]=useState(0);
  const [dataProducts,setDataProducts]=useState<ProductsLib[]>([])
  useEffect(()=>{
    const getData = async () =>{

      try{

        const {data} = await products.getProducts();

        setDataProducts(data);
        console.log(data);


      }catch(error){
        console.log(error);
      }

    }

    getData();
  

  },)

  const productPerPage=5;
  const productPerPageTable=12;
  const pagesVisited=pageNumber * productPerPage;

   const displayUsers=dataProducts.slice(pagesVisited,pagesVisited + productPerPageTable).map((item:any)=>{
    return (
      <>
         <ProductCard/> 
          
        </>
       

         
    )
  });

 const displayTable=dataProducts.slice(pagesVisited,pagesVisited + productPerPage).map((item:any)=>{
    return (
      <>
           <Tr>
              <Td data-label='Produto'><Box display='flex' align="center" gap={'8px'}> <ProductTable src={ps5}/> <p>Console Sony Playstation 5</p></Box></Td>
              <Td data-label='Quantity'>10</Td>
              <Td data-label='Price'>$999.90</Td>
              <Td data-label='Category'>{item.category}</Td>
              <Td dala-label='Status'>Active</Td>
            </Tr>
        </>
       

         
    )
  });


    const pageCount=Math.ceil(dataProducts.length / productPerPage);

  const changePage=({selected}:any)=>{
    setPageNumber(selected);
  }


  return(
    <ProductsWrapper>
      <Nav/>
      <Container responsive={false}>
        <Row display={'flex'} justifyContent='space-between' align='center'>
          <Title>Products</Title>
         
        </Row>
        <Row display="flex" align='center'>
            <Box display='flex' gap={'8px'} align='center'>
              <Select>
                <Option>New</Option>
              </Select>
               <Select>
                <Option>Best Sellers</Option>
              </Select>
            </Box>
            <Box display='flex' gap={'16px'} direction="flex-end"  align='center' flex={1}>
              <IconeBox onClick={()=>setShow(!show)}>{!show ? <HiViewGrid size={26} color='white' /> : <HiMenu size={26} color='white' />} </IconeBox>
             <Link to='/add'>
             <IconeBox ><FiPlus color='white' size={26} /> </IconeBox>
          
             </Link>
              
              </Box>
        </Row>
        <Row display='flex' flex_wrap="wrap" align="flex-start" gap={16}>
     {show ? (

 <Table>
          <Thead>
            <Tr>
              <Th><Box display='flex' align='center' gap='8px'><p>Name</p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Quantity </p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Price</p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Category</p><HiChevronDown/></Box></Th>
              <Th></Th>
        
            </Tr>
          </Thead>
          <TBody>
           {displayTable}
          </TBody>
        </Table>
     ) : (
      <>
    {displayUsers}
         </>

     )}
       
         
        </Row>
          <PaginationBox>
             
             
          <ReactPaginate
            previousLabel='Previous'
            nextLabel='Next'
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName='paginationBttns'
            previousLinkClassName='previusBttn'
            nextLinkClassName='nextBttn'
            disabledClassName='paginationDisabled'
            activeClassName='paginationActive'
         />
         </PaginationBox>
    </Container>
    </ProductsWrapper>
  )
}

export default Products