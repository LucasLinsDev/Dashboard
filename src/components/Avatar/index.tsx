import React, {useEffect,useState} from 'react';
import Avatar from 'react-avatar-edit';
const AvatarUpload = () =>{

  const [src,setSrc]=useState<any>(null);
  const [preview,setPreview]=useState(null)

  const onClose = () =>{
    setPreview(null);
  }

  

  const onCrop=(view:any)=>{
    setPreview(view);
  }

  return (
    <div>
      <Avatar 
        width={400}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
        />
        {preview && <img src={preview}/>}
    </div>
  )
}

export default AvatarUpload;