import styled from "styled-components"

interface IPropsTitle{
  color?:string
  size?:number
}

export const ProfileWrapper=styled.div`
  background-color:#383854 ;
  display:flex;
  gap:26px;

  width:100%;
  
  height:100vh;
  display:flex;
  gap:26px;
`

export const ProfileImage=styled.div`

  img{
    width:128px;
    height:128px;
  }
  text-align:center ;
  p{
    font-size:18px;
    padding:16px 0px;
  }
`

export const Title=styled.h2<IPropsTitle>`
  font-size:${(props)=>props.size +'px'};
  padding:16px 0px;
  color:${(props)=>props.color};
`