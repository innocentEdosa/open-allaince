import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import Footer from "../commons/Footer";
import { ReactComponent as MileStone } from "../assets/icons/milestone.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import routes from "../utilities/routes";

const List = ({nap, counter, data: { title: mainTitle, commitments } }) => {
  return (
    <div className="lg:w-1146 lg:mx-auto mt-20 first:mt-0">
      <h6 className="font-medium text-2xl font-sans tracking-open text-text-lemon mb-8 lg:text-4xl">
        {mainTitle}
      </h6>
      {commitments.map(({ title, id}) => {
        const list = (
            <Link to={`/commitment/${nap}/${mainTitle}/${id}`}>
            
          <div className="rounded-lg mb-6 p-28 cursor-pointer commitmentList">
            <h6 className="font-bold text-sm font-sans text-text-dark lg:text-xl">
              {`Commitment ${counter.current}`}
            </h6>
            <p className="my-3 font-semibold text-sm text-text-dark tracking-open font-sans lg:text-xl leading-5 lg:leading-8 ">
              {title}
            </p>
            <div className="flex">
              <div className="mr-4 flex items-center">
                <MileStone />
                <h6 className="ml-11 font-sans text-xs font-semibold">
                  <span className="font-bold">9</span> milestones
                </h6>
              </div>
              <div className="mr-4 flex items-center">
                <Calendar />{" "}
                <h6 className="ml-11 font-sans text-xs font-semibold">
                  <span className="font-bold">9</span> years ago
                </h6>
              </div>
            </div>
          </div>
            </Link>
        );
        counter.current = counter.current + 1;
        return list;
      })}
    </div>
  );
};

const CommitmentList = ({ loading, napData, nap }) => {
  const counter = useRef(1);

  console.log(napData, "this is the nap data");
  return (
    <>
      <div className="bg-shade-peach">
        <div className="py-10 px-6 lg:pt-88">
          {loading && <h6> loading</h6>}
          {napData.map((data) => (
            <List nap={nap} counter={counter} data={data} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CommitmentList;
