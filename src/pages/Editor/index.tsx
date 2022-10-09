import React, { useState, useEffect, useRef } from "react";
import {
  Backgrounds,
  BgContent,
  BgHeader,
  BgItem,
  BgItemImage,
  BoxIcon,
  ContainerEditor,
  EditorLayout,
  Icons,
  IconsItem,
  Img,
  Navbar,
  NavbarEditor,
  TextEditor,
  TextEditorContent,
} from "./styles";
import { fabric } from "fabric";
import ps5 from "../../assets/products/bg1.png";
import {
  AiFillAppstore,
  AiFillLayout,
  AiOutlineExpand,
  AiOutlineFontSize,
} from "react-icons/ai";
import { FiImage, FiMeh } from "react-icons/fi";
import Logo from "../../assets/gamer/game.svg";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
var fileServer = require("file-saver");
const Editor = () => {
  const location = useLocation();

  function pathMathRouter(route: string): void | Boolean | string {
    if (route === location.pathname) {
      return true;
    }

    console.log(location);
  }
  const [showIcon, setShowIcon] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const canvas: any = useRef(null);
  const [imgURL, setImgUrl] = useState("");
  const [text, setText] = useState<any>("");

  useEffect(() => {
    canvas.current = new fabric.Canvas("canvas", {
      height: 600,
      width: 600,
      backgroundColor: "pink",
      selection: false,
      renderOnAddRemove: true,
    });

    canvas.current.on("mouse:over", () => {
      console.log("hello");
    });
    console.log(canvas.current);
    canvas.current.on("mouse:up", (e: any) => {
      // console.log('lucas');
      // e.currentTarget.text='Vinicius';
      // console.log(e)
      // console.log(e.currentTarget.text='Vinicius');
    });

    // destroy fabric on unmount
    return () => {
      canvas.current.dispose();
      canvas.current = null;
    };
  }, []);

  const onChange = (e: any) => {
    setText((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(text);
  };

  const addText = (e: any) => {
    e.preventDefault();
    const textBox = new fabric.Textbox(text.text, {
      fontFamily: "Poppins",
      left: 250,
      top: 350,
      fill: text.color,
      stroke: text.color,
      strokeWidth: 2,
      fontSize: text.size,
    });
    canvas.current.add(textBox);

    console.log(canvas);
    canvas.current.renderAll();
  };

  const addReact = () => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "yellow",
    });
    canvas.current.add(rect);
    canvas.current.renderAll();
  };

  const addLoad = () => {
    // console.log(canvas.current);
    //console.log(canvas.current._activeObject);
    // console.log(canvas.current.getActiveObjects()[0]);
    const obj = canvas.current.getActiveObjects()[0];
    canvas.current.remove(obj);
    //canvas.current.getActiveObjects().forEach((obj:any) => {
    //canvas.current.remove(obj)
    //});
    //canvas.current.discardActiveObject().renderAll()
  };

  const bigFront = () => {
    // console.log(canvas.current);
    //console.log(canvas.current._activeObject);
    // console.log(canvas.current.getActiveObjects()[0]);
    const obj = canvas.current.getActiveObjects()[0];
    canvas.current.bringToFront(obj);
    //canvas.current.getActiveObjects().forEach((obj:any) => {
    //canvas.current.remove(obj)
    //});
    //canvas.current.discardActiveObject().renderAll()
  };

  const bigBack = () => {
    // console.log(canvas.current);
    //console.log(canvas.current._activeObject);
    // console.log(canvas.current.getActiveObjects()[0]);
    const obj = canvas.current.getActiveObjects()[0];
    canvas.current.sendToBack(obj);
    //canvas.current.getActiveObjects().forEach((obj:any) => {
    //canvas.current.remove(obj)
    //});
    //canvas.current.discardActiveObject().renderAll()
  };

  const addImg = (e: any) => {
    console.log("image");
    // var imgElement:any = document.getElementById('my-image');
    // let bg_img= new fabric.Image(imgElement);
    // canvas.current.backgroundImage=bg_img;
    // console.log(canvas.current.backgroundImage);
    // console.log(canvas.current.backgroundImage.width=400);
    // canvas.current.renderAll()
    var imageUrl = ps5;
    const canvasWidth = document.getElementById("canvas");
    canvas.current.setBackgroundImage(
      imageUrl,
      canvas.current.requestRenderAll(canvas),
      {}
    );
    canvas.current.requestRenderAll();
  };

  const addIcom = (e: any) => {
    console.log(e.target.src);

    var imgInstance = new fabric.Image(e.target, {
      left: 200,
      top: 100,
      angle: 30,
      opacity: 0.85,
    });

    canvas.current.add(imgInstance);
    canvas.current.renderAll();
  };

  const addBackground = (e: any) => {
    console.log("canvas-lucas");
    canvas.current.setBackgroundImage(ps5, function () {
      canvas.current.requestRenderAll();
    });
  };

  const saveToImage = () => {
    var photo;

    const newLocal: any = document.getElementById("canvas");
    html2canvas(newLocal).then(function (canvas) {
      photo = canvas.toDataURL();
      console.log(photo);
      fileServer.saveAs(photo, "name.jpg");
    });
  };

  const saveAnimation = () => {
    // const html = canvas;
    const can = canvas.current.backgroundImage._originalElement.currentSrc;
    const html = canvas.current._objects[0];
    const text = canvas.current._objects[0].text;
    const top = canvas.current._objects[0].top;
    const left = canvas.current._objects[0].top;
    const fontSize = canvas.current._objects[0].fontSize;
    const fill = canvas.current._objects[0].fill;

    console.log(can, html, text, top, left, fontSize, fill);

    var novoContent = document.createElement("div");
    novoContent.setAttribute("id", "canvas_ani");
    var texto = document.createTextNode(text);
    novoContent.appendChild(texto);

    var body = document.querySelector("body");
    body?.appendChild(novoContent);
  };

  const saveToJson = () => {
    const draw = canvas.current.toDatalessJSON(["cliPath"]);
    const out = JSON.stringify(draw, null, "\t");
    const blob = new Blob([out], { type: "text/plain" });
    const clipboardItemData = { [blob.type]: blob };
    const blobURL = URL.createObjectURL(blob);
    const a: any = document.createElement("a");
    console.log(blobURL);
    a.href = blobURL;
    a.dowload = "myWork.json";
    a.click();
    URL.revokeObjectURL(blobURL);
    console.log(JSON.parse(out));
  };

  return (
    <EditorLayout>
      <Navbar>
        <BoxIcon>
          <AiFillAppstore size={36} color="white" />
        </BoxIcon>
        <BoxIcon>
          <FiImage
            size={36}
            color="white"
            onClick={() => setShowIcon(!showIcon)}
          />
        </BoxIcon>
        <BoxIcon>
          <FiMeh size={36} color="white" onClick={() => setShowBg(!showBg)} />
        </BoxIcon>

        <BoxIcon>
          <AiOutlineFontSize size={36} color="white" />
        </BoxIcon>
        <BoxIcon>
          <AiFillLayout
            size={36}
            color="white"
            onClick={() => setShowTemplates(!showTemplates)}
          />
        </BoxIcon>
      </Navbar>
      <Backgrounds>
        <BgHeader>
          <div>
            <select>
              <option>GAMER</option>
            </select>
          </div>
        </BgHeader>
        <BgContent>
          <TextEditor>
            <TextEditorContent>
              <form onSubmit={addText}>
                <label></label>
                <input type="text" name="text" id="text" onChange={onChange} />
                <input
                  type="color"
                  name="color"
                  id="color"
                  onChange={onChange}
                />
                <input
                  type="number"
                  name="size"
                  id="size"
                  onChange={onChange}
                />

                <button type="submit">Add Text</button>
              </form>
              <button onClick={saveToImage}>Save to image</button>
              <button onClick={saveToJson}>Save to json</button>
              <button onClick={saveAnimation}>Save to html</button>
            </TextEditorContent>
          </TextEditor>
          {showBg && (
            <>
              <Icons>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                  <IconsItem>
                    <Img src={Logo} onClick={(e) => addIcom(e)} />
                  </IconsItem>
                ))}
              </Icons>
            </>
          )}

          {showTemplates && (
            <>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <BgItem>
                  <BgItemImage>
                    <img src={ps5} onClick={(e) => addBackground(e)} />
                  </BgItemImage>
                  <p>Lorem</p>
                </BgItem>
              ))}
            </>
          )}
          {showIcon && (
            <>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <BgItem>
                  <BgItemImage>
                    <img src={ps5} />
                  </BgItemImage>
                  <p>Lorem</p>
                </BgItem>
              ))}
            </>
          )}
        </BgContent>
      </Backgrounds>
      <ContainerEditor>
        <img
          src={ps5}
          id="my-image"
          style={{ width: "10px", height: "10px" }}
        />
        <form onSubmit={(e) => addImg(e)}>
          <div>
            <input
              type="text"
              value={imgURL}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <button type="submit">Add Image</button>
        </form>

        <button onClick={bigFront}>Front</button>
        <button onClick={bigBack}>Back</button>
        <button onClick={addLoad}>Load</button>
        <button onClick={addReact}>add text</button>
        <canvas id="canvas" ref={canvas} />
        <div id="animation_canvas"></div>
      </ContainerEditor>
      <NavbarEditor></NavbarEditor>
    </EditorLayout>
  );
};

export default Editor;
