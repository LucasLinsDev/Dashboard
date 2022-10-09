import { AvatarContent, AvatarWrapper, Image } from "./styles"

import icone from '../../../assets/icones/avatar_image.png'

interface IPropsAvatar{
  title?:string
  txt?:string
}

const Avatar = ({title,txt}:IPropsAvatar) =>{
  return(
    <AvatarWrapper>
      <Image src={icone}/>
      <AvatarContent>
        <h1>{title}</h1>
        <p>{txt}</p>
      </AvatarContent>
    </AvatarWrapper>
  )
}
export default Avatar