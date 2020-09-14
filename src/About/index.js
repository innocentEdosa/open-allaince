import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllianceAction } from '../store/About/action';
import AboutTab from './aboutTab';
import './style.css';

const About = ({
    fetchAlliance
}) => {
    useEffect(()=> {
        fetchAlliance()
    }, [])
    return (<div className="newWrapper xs:px-6 xs:py-10">
        <div>

        <AboutTab />
        </div>

    </div>  );
}
 
const mapDispatchToProps = (dispatch) => ({
    fetchAlliance: () => dispatch(fetchAllianceAction())
})
export default connect(null, mapDispatchToProps)(About);