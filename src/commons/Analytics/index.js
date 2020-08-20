import React from 'react';
import { ReactComponent as ThematicIcon } from '../../assets/icons/thematic.svg';


const Analytics = () => {
    return ( <div className="h-475 bg-shade flex items-center justify-center">
       {
           [1,2,3,4].map((item) => {
               return (<div key={item} className=" justify-center flex flex-col items-center mr-30 last:mr-0 w-264 h-228 bg-shade-nature rounded-rounder">
                   <div>
                       <ThematicIcon />
                   </div>
                    <h6 className="my-3 text-text-nature text-44 font-sans font-medium ">7</h6>
                   <h6 className="text-text-late font-medium text-xl">Thematic Areas</h6>
               </div>)
           })
       }
    </div> );
}
 
export default Analytics;
