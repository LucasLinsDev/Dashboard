import { AvatarWrapper, Img } from "./styled";

interface IPropsAvatar{
  src?:any
  alt?:string
}

const Avatar = ({src,alt}:IPropsAvatar) =>{
  return(
    <AvatarWrapper>
       <Img src={src} alt={alt}/>
    </AvatarWrapper>
  )
}

export default Avatar;