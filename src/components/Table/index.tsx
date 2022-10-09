
import avatar from '../../assets/icones/avatar.png'
import Box from "components/Box";
import { TableContainer, TableWrapper, Tbody, Td, Th, THead, Tr } from './styles.';
import steps from '../../assets/products/steps.png'
interface IPropsTable{
  image?:any
}

const Table=({image=avatar}:IPropsTable)=>{
  return (
    <TableContainer>
      <TableWrapper>
          <THead>
            <Tr>
              <Th>Products</Th>
              <Th>Order ID</Th>
              <Th>Date</Th>
              <Th>Customer name</Th>
              <Th>Status</Th>
              <Th>Amount</Th>
              <Th>Action</Th>
            </Tr>
          </THead>
          <Tbody>
           {[1,2,3,4].map(()=>(
             <Tr>
              <Td data-label='Product'>Iphone 13 Pro</Td>
              <Td data-label='Code'>#11232</Td>
              <Td data-label='Date'>Jun 29,2022</Td>
              <Td data-label='Quantity'>Afaq Karim</Td>
              <Td data-label={'Active'}>Delivered</Td>
              <Td data-label={'Price'}>$400.00</Td>
              <Td ><img src={steps} /></Td>
            </Tr>
           ))}
          </Tbody>
      </TableWrapper>
    </TableContainer>
  )
}

export default Table;