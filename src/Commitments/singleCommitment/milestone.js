import React, { useState } from 'react';
import Parser from 'html-react-parser';
import '../style.css';
import Skeleton from 'react-loading-skeleton';
import { ReactComponent as Nologo} from '../../assets/icons/noLogo.svg';


const MilestoneList = ({
    milestone: {
        milestone_info,
        title,
        admin_uploaded_logo,
        cso_logo,
        target_year,
        percentage_completion,
    }
}) => {

  const [imgFailed, setImageFailed] = useState(false);

  const imageFailHandler = () => setImageFailed(true);
  const imgUrl = admin_uploaded_logo || cso_logo ;

return (
  <div className="bg-shade w-full py-10 border-b  border-shade-lightcoal border-opacity-30 last:border-0 px-10 ">
    <h6 className="text-base text-text-dark tracking-open font-sans font-semibold">
      {title}{" "}
    </h6>
    <div className="lg:flex mb-6 lg:mb-10">
      <div className="mt-6 lg:mr-60 last:mr-0">
        <h6 className="tracking-open text-text-placeholder font-sans font-medium">
          LEAD CSO
        </h6>
        <div className=" mt-2 h-8 flex items-center justify-start w-88 ">
          {!imgFailed && (
            <img
              onError={imageFailHandler}
              onStalled={imageFailHandler}
              alt="cso_logo"
              className="h-full"
              src={imgUrl}
            />
          )}
          {imgFailed && (
            <div>
              <Nologo />
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 lg:mr-60 last:mr-0">
        <h6 className="tracking-open text-text-placeholder font-sans font-medium">
          TARGET YEAR
        </h6>
        <div className=" mt-2">
          <h6>{target_year}</h6>
        </div>
      </div>
      <div className="mt-6 lg:mr-60 last:mr-0">
        <h6 className="tracking-open text-text-placeholder font-sans font-medium mb-2">
          % COMPLETED
        </h6>
        <div className="w-full lg:w-196 flex items-center">
          <div className=" w-11/12 h-11 relative rounded-rounded30 status-container">
            <span
              className="status"
              style={{ width: percentage_completion + "%" }}
            ></span>
          </div>
          <h6 className="ml-3 text-xs font-sans font-medium flex-shrink-0">
            {percentage_completion} %
          </h6>
        </div>
      </div>
    </div>
    <div className="mileStone">
      <h6 className="tracking-open text-text-placeholder font-sans font-medium mb-2 ">
        UPDATES
      </h6>
      {Parser(milestone_info)}
    </div>
  </div>
);
}

const CommitmentMilestones = ({ fetchingMilestone, milestones }) => {
  return (
    <div className="bg-shade py-4 ">
      {fetchingMilestone &&
        [1, 2, 3].map(() => (
          <div className="w-full bg-shade-background flex flex-col justify-center h-40 mb-6 px-10 ">
            <Skeleton count={3} />
          </div>
        ))}
      {!fetchingMilestone &&
        milestones.map((milestone) => <MilestoneList milestone={milestone} />)}
    </div>
  );
};

export default CommitmentMilestones;