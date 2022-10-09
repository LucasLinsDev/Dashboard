
import logoimage from '../../assets/products/logo.svg';
import { Img, LogoWrapper, TextIcon } from './styles';

interface IPropsLogo{
  src?:any
  txt?:string
}


const Logo = ({src=logoimage,txt}:IPropsLogo) =>{
  return(
    <LogoWrapper>
      <Img src={src} alt=''/>
      <TextIcon>
        {txt}
      </TextIcon>
    </LogoWrapper>
  )
}

export default Logo;