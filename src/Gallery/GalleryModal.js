import React, {useState, useEffect, useRef} from 'react';
import LightBox from 'react-image-lightbox';
import Img from '../assets/img/learning.jpg'
import 'react-image-lightbox/style.css';

const GalleryModal = ({children, type = "picture"}) => {
    const [ isLightBoxOpen, setLightBoxOpen] = useState(false)

    const imgDownloadRef = useRef(null);

    const closeImgLightBox = () => setLightBoxOpen(false);

    const downloadImg = () => {
        imgDownloadRef.current.href = Img;
        imgDownloadRef.current.target = '_blank';
        imgDownloadRef.current.click()
    }

    const downloadButton = (
      <button onClick={downloadImg} className=" bg-shade text-text-blue text-sm font-semibold font-sans tracking-open  px-6 h-8  ml-6  flex items-center rounded focus:outline-none ">Download</button>
    );



    const computedOutput = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onClick: () => {
                if(type === 'picture'){
                    setLightBoxOpen(true);
                }
                if(child.props.onClick){
                    child.props.onClick()
                }
            }
        })
    })
    return ( <div>
    {computedOutput} 
    {
        isLightBoxOpen && <div className="">
            <a download ref={imgDownloadRef}></a>
            <LightBox toolbarButtons={[downloadButton]} onCloseRequest={closeImgLightBox} mainSrc={Img}>
            

                
            </LightBox>
            </div>
    }

    </div>

    );
}
 
export default GalleryModal;