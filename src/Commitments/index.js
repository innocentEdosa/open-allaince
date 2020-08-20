import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchThematicAreaAction } from '../store/thematicStore/actions';
import CommitmentList from './CommitmentList';
import './style.css';

const CommitmentContainer = ({
  thematicDataNap1,
  thematicDataNap2,
  fetchingNap1,
  fetchingNap2,
  fetchThematicDataHandler,
  fetchData,
}) => {
    const { nap } = useParams();

useEffect(() => {
  if (nap === "nap1" && !thematicDataNap1.length) {
    fetchData(1);
  }
}, [nap]);

useEffect(() => {
  if (nap === "nap2" && !thematicDataNap2.length) {
    fetchData(2);
  }
}, [nap]);

  return (
    <CommitmentList  nap={nap} loading={nap === 'nap1' ? fetchingNap1 : fetchingNap2} napData={nap === 'nap1' ? thematicDataNap1 : thematicDataNap2 } />
  );
};

const mapStateToProps = ({thematic: {
    fetchingThematicData: {
        nap1: fetchingNap1,
        nap2: fetchingNap2,
    }, thematicData: {
        nap1: thematicDataNap1,
        nap2: thematicDataNap2,
    }
}}) => ({
fetchingNap1,
fetchingNap2,
thematicDataNap1,
thematicDataNap2,
});

const mapDispatchToProps = (dispatch) => ({
fetchData: (params) => dispatch(fetchThematicAreaAction(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommitmentContainer);
