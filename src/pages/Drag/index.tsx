import React,{useState,useRef} from 'react';

const Drag = () => {
  const [selectedImages,setSelectedImages]=useState<any>([]);
  const inputRef:any=useRef();

  const onSelectFile = (e:any) => {
 
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray:any = selectedFilesArray.map((file:any)=>{
      return URL.createObjectURL(file);
    })

    setSelectedImages((previusImages:any)=>previusImages.concat(imagesArray));



  }


const handle = () =>{
  console.log(selectedImages);
      const myFile=new File([selectedImages[0]], 'image.jpeg',{
      type:selectedImages[0].type,
    })


    console.log(URL.createObjectURL(myFile));

    console.log(myFile+"jpeg");
}

  return (

      <section>
        <label htmlFor='images' >Add images
        <br/>
       
        </label>
        {selectedImages.length > 0 && 
          (selectedImages.length > 10 ? (
            <p className='error'>
                    Yuo can't upload more than 10 images! <br/>
                    <span>
                      please delete <b/> {selectedImages.length - 10 } <b/> of then {" "}
                    </span>
            </p>
          ) :
          (
            <button
              className='upload-btn'
              onClick={()=>{
            
                handle()
              }}
            >
                    UPLOAD {selectedImages.length} IMAGE
                    { selectedImages.length === 1 ? "" : "5" }
            </button>  
          )
          
          )
          
        }
        <input 
          type='file' 
          name='images'
         
          onChange={onSelectFile} 
          multiple accept='image/png , image/webp' 
       
        /> 

        <div className='images'>
            {selectedImages &&
              selectedImages.map((image:any,index:any)=>{
                 return(
                  <div key={image} className='images'>
                      <img src={image} height='200' alt='' width='200' />
                      <button onClick={()=> 
                        setSelectedImages(selectedImages.filter((prevState:any) => prevState !== image))
                      }>delte image</button>
                      <p>{index + 1}</p>
                  </div>
                )
              })
            }
        </div>
       
      </section>

  )

}

export default Drag;