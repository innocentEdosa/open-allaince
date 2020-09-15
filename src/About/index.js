import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllianceAction } from "../store/About/action";
import AboutTab from "./aboutTab";
import AboutDetails from "./AboutDetails";

import "./style.css";

const About = ({ fetchAlliance, fetchingAlliance, allianceList }) => {
  useEffect(() => {
    fetchAlliance();
  }, []);
  return (
    <div className="newWrapper xs:px-6 xs:py-10 lg:px-60 newWrapper bg-shade-pink">
      <div className="xl:w-1146 mx-auto">
        <AboutTab />
        <AboutDetails
          fetchingAlliance={fetchingAlliance}
          allianceList={allianceList}
        />
      </div>
    </div>
  );
};
 
const mapStateToProps = ({
    alliance: {
        fetchingAlliance,
        allianceList,
    }
}) => ({
    fetchingAlliance,
    allianceList,
})
const mapDispatchToProps = (dispatch) => ({
    fetchAlliance: () => dispatch(fetchAllianceAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(About);