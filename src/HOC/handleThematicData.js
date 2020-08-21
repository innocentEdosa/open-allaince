import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchThematicAreaAction } from '../store/thematicStore/actions'

const handleThematicData = ( ComposedComponent, nap = 1) =>  {
  const WrapperComponent = (props) => {

    const { fetchThematicData, thematicDataNap1, thematicDataNap2 } = props;
    useEffect(() => {
      if (
        (nap === 1 && !thematicDataNap1.length) ||
        (nap === 2 && !thematicDataNap2.length)
      ) {
        fetchThematicData(nap);
      }
    }, []);

    const fetchThematicDataHandler = (nap) => {
      props.fetchThematicData(nap)
    }
      return <ComposedComponent fetchThematicDataHandler={fetchThematicDataHandler} {...props} />
  }

  const mapStateToProps = ({
    thematic: {
      fetchingThematicData: {
        nap1: fetchingNap1,
        nap2: fetchingNap2,
      },
      thematicData: {
        nap1: thematicDataNap1,
        nap2: thematicDataNap2,
      }
      
    }
  }) =>( {
thematicDataNap1,
thematicDataNap2,
fetchingNap1,
fetchingNap2,

  });

  const mapDispatchToProps = (dispatch) => ({
fetchThematicData: (params) => dispatch(fetchThematicAreaAction(params))
  })

  return connect(mapStateToProps, mapDispatchToProps)(WrapperComponent);
}

export default handleThematicData;
