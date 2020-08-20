import React from 'react';
import Parser  from 'html-react-parser';

const AboutCommitment = ({
    about
}) => {
    return ( 
        <div className="bg-shade p-4">
        { Parser(about)}
      </div>
     );
}
 
export default AboutCommitment;