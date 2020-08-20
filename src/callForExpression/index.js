import React from 'react';
import NavBar from '../website/components/navbar';
import Footer from '../website/components/footer';
import './style.css';
import { contextArray, objectiveArray, managementArray, timingArray, applicationArray, selectionArray, listArray } from './contentArray';

const CallForExpression = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="d-flex justify-content-center align-items-center callForExpressionShowcase flex-column">
        <h4 className="showcase-lead text-white text-center">
          {" "}
          CALL FOR EXPRESSION OF INTEREST{" "}
        </h4>
        <h6 className="showcase-sub text-white text-center">
          State-level case study on civil society's role in the implementation
          of NAP 1
        </h6>
      </div>
      <div className="main-wrapper">
        <div className="date-wrapper">
          <span className="d-inline main-date">July, &nbsp;2020</span>
        </div>
        <div className="main-content-wrapper">
          <div>
            <h6 className="content-heading">Context</h6>
            {contextArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">
              OBJECTIVES AND SCOPE OF THE ASSIGNMENT
            </h6>
            {objectiveArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">MANAGEMENT</h6>
            {managementArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">TIMING</h6>
            {timingArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">ELIGIBILITY CRITERIA</h6>
            <p className="content sub-content">The successful consultant(s) will amongst other things:</p>
            <ol className="list">
              {
                listArray.map((list) => (
                  <li><p className="content list-content">{list}</p> </li>
                ))
              }
            </ol>
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">APPLICATION PROCEDURE</h6>
            {applicationArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
          <div className="subSection-wrapper">
            <h6 className="content-heading">SELECTION CRITERIA</h6>
            {selectionArray.map((text) => (
              <p className="content">{text}</p>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
 
export default CallForExpression;
