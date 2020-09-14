 import React, { useEffect, useRef } from "react";
 import { connect } from "react-redux";
 import { fetchDocumentAction } from "../store/Documents/action";
 import DocumentList from "./list";

 const DocumentContainer = ({
   fetchDocuments,
   fetchingDocuments,
   documents,
 }) => {

    const downloadLinkRef = useRef(null);

   useEffect(() => {
     fetchDocuments();
   }, [fetchDocuments]);

   const downloadHandler = ({ src, key }) => {
     const { current: downloadLink } = downloadLinkRef;
     downloadLink.setAttribute("href", src);
     downloadLink.setAttribute("download", key);
     downloadLink.setAttribute("target", "_blank");
     downloadLink.click();
   };
   return (
     <>
       <a ref={downloadLinkRef} href="/downloadHandler" className="hidden">
         ''
       </a>
       <DocumentList
         downloadHandler={downloadHandler}
         fetchingDocuments={fetchingDocuments}
         documents={documents}
       />
     </>
   );
 };
 
const mapStateToProps = ({ document: {
    fetchingDocuments,
    documents,
} }) => ({
    fetchingDocuments,
    documents,
})
const mapDispatchToProps = (dispatch) => ({
fetchDocuments: () => dispatch(fetchDocumentAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainer);
