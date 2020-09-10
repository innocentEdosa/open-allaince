import React, { useEffect } from "react";
import formatDate from "../utilities/dateFormatter";
import GalleryModal from "./GalleryModal";
import { useHistory } from "react-router-dom";
import routes from "../utilities/routes";

const GalleryDetails = () => {
  const {
    location: {
      state: { data } = {},
    },
    push,
  } = useHistory();

  useEffect(() => {
    if (!data) {
      push(routes.gallery);
    }
  }, []);

  return (
    <>
    {

    Boolean(data) && <div className="px-6 py-10 bg-shade-background">
      <div className="my-10 flex flex-col items-center">
        <h6 className="text-text-blue font-sans font-bold text-2xl text-center mb-6">
          {data.caption}
        </h6>
        <h6>
          Uploaded <span>{formatDate(data.created_at)}</span>
        </h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-30 row-gap-6 xl:mx-auto xl:w-1146">
        {data.pictures.map(({ id, file_url, file_name }) => (
          <GalleryModal type="picture" mainSrc={file_url}>
            <div className="xs:w-full  bg-shade h-232 imgWrapper box-border">
              <div className="w-full  relative h-full flex items-end">
                <img src={file_url} alt={file_name} className="h-full w-full" />
              </div>
            </div>
          </GalleryModal>
        ))}
      </div>
    </div>
    }
    </>
  );
};

export default GalleryDetails;
