import { ProgresItemContent, ProgressItem,Span, ProgressWrapper, Title, Progress } from "./styles";

const Progres = () =>{
  return(
    <ProgressWrapper>
      <Title>Most Sold Items </Title>
      <ProgressItem>
        {[1,2,3,4].map(()=>(
           <>
            <ProgresItemContent>
              <Span>Jeans</Span>
              <Span>70%</Span>
             
          </ProgresItemContent>
           <Progress  value='70' max='100'/>
           </>
        ))}
      </ProgressItem>
    </ProgressWrapper>
  )
}

export default Progres;