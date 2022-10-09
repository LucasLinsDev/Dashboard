import styled from 'styled-components';

interface IPropsH1{
  mt?:string
}

export const HomeWrapper=styled.div`
display:flex;
gap:26px;
background:#383854;
`

export const H1 = styled.h1<IPropsH1>`
  font-size:24px;
  color:white;
  margin-bottom:${(props)=>props.mt +'px'};

`

export const P=styled.p`
  font-size:16px;
`

export const BoxChart =styled.div`
  max-width:689px;
  width:100%;
 
  background:#2E2E48;
  padding:16px;
`