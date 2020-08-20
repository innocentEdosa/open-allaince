import React from 'react';
import analyticsList from './analyticsList';


const Analytics = () => {
    return ( <div className="xs:py-10 xs:px-6 lg:h-475 bg-shade-background flex flex-col lg:flex-row items-center justify-center">
       {
           analyticsList.map((item) => {
               return (<div key={item.title} className=" justify-center flex flex-col items-center xs:mb-6 last:mb-0 lg:mb-0 lg:mr-30 last:mr-0 w-full  lg:w-264 h-228 bg-shade-nature rounded-rounder">
                   <div>
                       {item.icon}
                   </div>
                    <h6 className="my-3 text-text-nature text-44 font-sans font-medium ">{item.count}</h6>
                   <h6 className="text-text-late font-medium text-xl">{item.title}</h6>
               </div>)
           })
       }
    </div> );
}
 
export default Analytics;
