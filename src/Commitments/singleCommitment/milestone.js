import React from 'react';
import Parser from 'html-react-parser';
import '../style.css';

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
return (
  <div className="bg-shade w-full py-10 px-4 border-b  border-shade-lightcoal border-opacity-30 last:border-0">
    <h6 className="text-base text-text-dark tracking-open font-sans font-semibold">
      {title}{" "}
    </h6>
    <div className="lg:flex mb-6 lg:mb-10">

    <div className="mt-6 lg:mr-60 last:mr-0">
      <h6 className="tracking-open text-text-placeholder font-sans font-medium">
        LEAD CSO
      </h6>
      <div className=" mt-2">
        <img  alt="admin_uploaded_logo" className="h-8" src={admin_uploaded_logo} />
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
      <h6 className="ml-3 text-xs font-sans font-medium flex-shrink-0">{percentage_completion} %</h6>

      </div>
    </div>
    </div>
    <div>
    {Parser(milestone_info)}
    </div>
  </div>
);
}

const CommitmentMilestones = ({
    fetchingMilestone,
    milestones,
}) => {
    return (             <div className="bg-shade py-4">
    {
        milestones.map((milestone) => <MilestoneList milestone={milestone} /> )
    }
  </div> );
}
 
export default CommitmentMilestones;