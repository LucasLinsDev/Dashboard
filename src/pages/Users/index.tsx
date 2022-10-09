import React,{useState,useEffect} from 'react'
import Box from "components/Box";
import Container from "components/Container";
import Nav from "components/Nav";
import { Button, PageHeader, Table, TBody, Td, Th, Thead, TitlePage, Tr, UsersWrapper } from "./styles";
import steps from '../../assets/products/steps.svg';
import avatar from '../../assets/products/avatar.png';
import { HiChevronDown } from "react-icons/hi";
import Row from "components/Row";
import AddCustumer from "components/AddCustumer";
import { users as HTTPusers } from 'libs/http/user/user';
import ReactPaginate from 'react-paginate';
import { json } from 'stream/consumers';
import Select from 'components/Select';
import './pagination.css';
const Users = () =>{

  const [show,setShow] = useState(false);
  const [usersData,setUsersData] = useState<any>([]);
  const [loading,setLoading]=useState(false);
  const [pageNumber,setPageNumber]=useState(0);




  useEffect(()=>{
    const getData=async()=>{
      try{
        const {data}=await HTTPusers.getUsers();
        setUsersData(data);
        setLoading(true);
      }catch(error){
        console.log(error);
      }
    }
       getData();
      console.log(usersData);
  },[])
  
  const usersPerPage=6;
  const pagesVisited=pageNumber * usersPerPage;

  const displayUsers=usersData.slice(pagesVisited,pagesVisited + usersPerPage).map((item:any)=>{
    return (
        <Tr>
              <Td data-label='Name'><Box display='flex' align="center" gap={'8px'}> <img src={avatar}/><p>{item.name}</p></Box></Td>
              <Td data-label='Email'>{item.email}</Td>
              <Td data-label='Phone'>{item.phone}</Td>
              <Td data-label='Gender'>{item.gender}</Td>
              <Td dala-label='Staus'><img src={steps}/></Td>
            </Tr>
    )
  });

  const pageCount=Math.ceil(usersData.length / usersPerPage);

  const changePage=({selected}:any)=>{
    setPageNumber(selected);
  }

  return(
    <UsersWrapper>
      <Nav/>
      <Container responsive={false} paddingTop={0}>
       <Row display='flex' gap={26}>
        <Box flex={1}>
             <PageHeader>
              
        <TitlePage>Customer List</TitlePage>
       {!show &&  <Button onClick={()=>setShow(!show)} >Add Custumer</Button>}
        </PageHeader>

        <Table >
          <Thead>

         
            <Tr>
              <Th><Box display='flex' align='center' gap='8px'><p>Name</p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Email</p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Number</p><HiChevronDown/></Box></Th>
              <Th><Box display='flex' align='center' gap='8px'><p>Gender</p><HiChevronDown/></Box></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <TBody>
           

               {loading && displayUsers && displayUsers.length !== 0 ? <>{displayUsers}</> : (<p>current not found</p>)}
         
       
          </TBody>
        </Table>
       
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
        </Box>
        {show && (
       
          <AddCustumer setShow={setShow} show={show}/>
     
        )}
       </Row>
      </Container>
    
    </UsersWrapper>
  )
}

export default Users;