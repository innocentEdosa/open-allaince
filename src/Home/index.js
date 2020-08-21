import React from 'react';
import TopNav from '../commons/TopNav';
import Showcase from '../commons/ShowCase';
import Footer from '../commons/Footer';
import Story from '../commons/Stories';
import Analytics from '../commons/Analytics';
import NewsLetter from '../commons/NewsLetter';
import ThematicShowArea from '../commons/ThematicShowcard';
import PostShowcase from '../commons/PostShowcase';

const Home = () => {
    return (
        <div className="mainSection bg-shade-background ">
            <Showcase/>
            <PostShowcase />
            <ThematicShowArea />
          <NewsLetter />
            <Analytics />
            <Story />
            {/* <Footer />  */}
        </div>
    );
}
 
export default Home;