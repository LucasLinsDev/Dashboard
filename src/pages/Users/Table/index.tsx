import Box from 'components/Box'
import React from 'react'
import { Table, TBody, Td, Th, Thead, Tr } from './styles'
import steps from '../../../assets/products/steps.svg';
import { HiChevronDown } from 'react-icons/hi';
import avatar from '../../../assets/products/avatar.png';
function TableWrapper({currentPosts}:any) {
  console.log(currentPosts)
  return (
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
               {currentPosts && currentPosts.length !== 0 ? (
            currentPosts.map((item:any)=>(
             <Tr>
              <Td data-label='Name'><Box display='flex' align="center" gap={'8px'}> <img src={avatar}/><p>{item.name}</p></Box></Td>
              <Td data-label='Email'>{item.email}</Td>
              <Td data-label='Phone'>{item.phone}</Td>
              <Td data-label='Gender'>{item.gender}</Td>
              <Td dala-label='Staus'><img src={steps}/></Td>
            </Tr>
                  ))
            ) : (<p>current not found</p>)}
         
       
          </TBody>
        </Table>
  )
}

export default TableWrapper