import React from 'react';
import TopNav from '../commons/TopNav';
import Showcase from "../commons/ShowCase";
import Footer from "../commons/Footer";
import Story from "../commons/Stories";
import Analytics from "../commons/Analytics";
import NewsLetter from "../commons/NewsLetter";
import ThematicShowArea from "../commons/ThematicShowcard";
import PostShowcase from "../commons/PostShowcase";
import MileStoneAnalytics from "../commons/MilestoneAnalytics";
import CommitmentCard from '../commons/ThematicShowcard/CommitmentCard';

const Home = () => {
  return (
    <div className="mainSection bg-shade-background ">
      <Showcase />
      <PostShowcase />
      <ThematicShowArea />
      <MileStoneAnalytics />
<CommitmentCard />
      <NewsLetter />
      <Analytics />
      <Story />
    </div>
  );
};

export default Home;