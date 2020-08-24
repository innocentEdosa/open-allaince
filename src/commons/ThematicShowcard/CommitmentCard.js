import React from 'react';
import { commitmentCardList } from './thematicList';

const CommitmentCard = () => {
    return ( <div className="xs:px-6 xs:py-10 lg:flex lg:justify-center">
        <div className="flex flex-col lg:flex-row xl:w-1146 ">
            {
                commitmentCardList.map(({title, description}) => (
                    <div key={title} style={{
                        background: 'linear-gradient(101.65deg, #E0F0E0 44.2%, #ADBAE6 266.91%)'
                    }} className="rounded-lg xs:px-6 xs:py-10 mb-6 last:mb-0 lg:mr-30 lg:last:mr-0 lg:mb-0">
                       <h6 className="font-sans font-bold tracking-open text-xl mb-4">{title}</h6>
                       <p>{description}</p>
                    </div>
                ))
            }
        </div>
    </div> );
}
 
export default CommitmentCard;