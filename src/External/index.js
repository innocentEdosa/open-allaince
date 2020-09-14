import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchExternalLinkAction } from '../store/ExternalLinks/action';
import ExternalLinkList from './list';
import './style.css';

const ExternalLink = ({
    fetchExternalLinks,
    externalLinks,
    fetchingExternalLink,
}) => {

    useEffect(() => {
        if(!externalLinks.length){
            fetchExternalLinks()
        }
    }, [])
    return ( <ExternalLinkList  fetchingExternalLink={fetchingExternalLink} externalLinks={externalLinks} /> );
}
 
const mapStateToProps = ({ external:{
    fetchingExternalLink,
    externalLinks
}}) => ({
    fetchingExternalLink,
    externalLinks,
});

const mapDispatchToProps = (dispatch) => ({
    fetchExternalLinks: () => dispatch(fetchExternalLinkAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(ExternalLink);