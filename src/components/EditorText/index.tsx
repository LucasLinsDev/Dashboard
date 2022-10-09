import React, {useState, useRef, useMemo, useEffect} from 'react';
import JoditEditor from "jodit-react";
import { CSSObject } from 'styled-components';

interface IPropsExample{
  placeholder?:string
  onChange?:any
}

const Editor = ({placeholder,onChange}:IPropsExample) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')
  useEffect(()=>{
       var jodit:CSSObject | Element | null | any = document.querySelector('.jodit');
      jodit.style='min-height:280px;'
     
      jodit.style.background='#F8F8F8'
  },[])

	return (
            <JoditEditor
            	ref={editor}
                value={content}
              
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={onChange}
            />
        );
}

export default Editor;