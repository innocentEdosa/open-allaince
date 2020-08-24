import React from 'react';
import Parser  from 'html-react-parser';
import Skeleton from 'react-loading-skeleton';

const AboutCommitment = ({
    activeCommitment,
    fetchingCommitment,
}) => {
    return ( 
        
        <div className="bg-shade xs:p-4">
            {
                fetchingCommitment && [1,2,3].map(() => <div className="w-full bg-shade-background flex flex-col justify-center h-40 mb-6 px-6">
                    <Skeleton count={3} />
                </div>)
            }
        { !fetchingCommitment && activeCommitment.about && Parser(activeCommitment.about)}
      </div>
     );
}
 
export default AboutCommitment;