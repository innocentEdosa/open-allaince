import React, {useState, useRef} from 'react';
import LightBox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GalleryModal = ({children, type = "picture", mainSrc}) => {
    const [ isLightBoxOpen, setLightBoxOpen] = useState(false)

    const imgDownloadRef = useRef(null);

    const closeImgLightBox = () => setLightBoxOpen(false);

    const downloadImg = () => {
        imgDownloadRef.current.href = mainSrc;
        imgDownloadRef.current.target = '_blank';
        imgDownloadRef.current.click()
    }

    const downloadButton = (
        <>
      <button onClick={downloadImg} className=" bg-shade text-text-blue text-sm font-semibold font-sans tracking-open  px-6 h-8  flex items-center rounded focus:outline-none right-0 xs:mx-4 md:mx-6">Download</button>
      
      </>
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
        isLightBoxOpen && <div>
            <a className="hidden" href="img/download" download ref={imgDownloadRef}>''</a>
            <LightBox toolbarButtons={[downloadButton, <div/>]} onCloseRequest={closeImgLightBox} mainSrc={mainSrc}>
            

                
            </LightBox>
            </div>
    }

    </div>

    );
}
 
export default GalleryModal;