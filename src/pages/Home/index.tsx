import Box from "components/Box";
import  CardSimple  from "components/Cards/CardSimple";
import { ChartDunut } from "components/ChartDunut";
import { ChartVertical } from "components/ChartVertical";

import Container from "components/Container";
import Nav from "components/Nav";
import Progres from "components/Progress";
import Row from "components/Row";
import SoldItems from "components/SoldItems";
import Table from "components/Table";

import { BoxChart, H1, HomeWrapper, P } from "./styles";

const Home = () =>{
  return(
    <HomeWrapper>
      <Nav/>

      <Container display='flex'  gap={16} flex='column' responsive={false}>
            <Row>
              <Box><H1 >Dashboard</H1></Box>
            </Row>
            <Row display='flex' gap={16} responsive={true}>
            {[1,2,3].map(()=>(
                 <CardSimple/>
            ))}
            </Row>
            <Row display='flex' gap={26} responsive={true}>
               <BoxChart>
                 <ChartVertical/>
               </BoxChart>
             
                <Progres/>
             
            </Row>
            <Row>
              <Table/>
            </Row>
      </Container>

   
    </HomeWrapper>
  )
}

export default Home;