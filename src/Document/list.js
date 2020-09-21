import React from 'react';
import { ReactComponent as DownloadIcon } from '../assets/icons/cloud-storage-download.svg';
import formatDate from '../utilities/dateFormatter';
import './style.css';
import Skeleton from 'react-loading-skeleton';

const DocumentList = ({ fetchingDocuments, documents, downloadHandler }) => {
   
  return (
    <div className="xs:bg-shade-pink px-6 py-10 lg:px-60  documentsWrapper">
      {fetchingDocuments && [1,2,4].map(() => (<div className="mb-8 xl:w-1146 mx-auto">
        <Skeleton count="3"/>
      </div>))}

      {!fetchingDocuments && (
        <div className="xl:w-1146 mx-auto topDocumentWrapper">
          {documents.map(({ src, name, type, key, timestamp: { date } }) => (
            <div
              key={key}
              className="flex flex-col xs:items-center justify-center xs:px-8 xs:py-6 lg:flex-row documentWrapper"
            >
              <h6 className="hidden lg:block text-text-milk font-sans tracking-open">
                {formatDate(date, "yyyy")}
              </h6>
              <div className="flex flex-col justify-center lg:w-800 lg:mx-57">
                <h6 className="text-lg font-sans tracking-open xs:text-center leading-relaxed lg:text-left lg:mb-2 capitalize">
                  {name.toLowerCase()}
                </h6>
                <span className="hidden lg:flex self-start bg-shade-clear xs:px-2 rounded-full w-52  items-center justify-center font-sans text-sm tracking-open text-text-dark capitalize">
                  {`.${type}`}
                </span>
              </div>

              <button
                onClick={() => downloadHandler({ src, key })}
                className="xs:w-full xs:h-52 xs:border border-shade-lightcoal rounded-full flex items-center justify-center xs:mt-6 lg:mt-0 focus:outline-none lg:px-2 md:w-180 lg:h-12 hover:bg-accent-gold hover:border-transparent hover:text-text-blm "
              >
                <DownloadIcon />
                <h6 className="xs:px-4 lg:px-2 font-sans text-lg text-text-blm">
                  Download
                </h6>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default DocumentList;