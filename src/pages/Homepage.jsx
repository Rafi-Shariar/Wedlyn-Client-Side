import React from 'react';
import Banner from '../components/Banner/Banner';
import PremiumMembers from '../components/homepage/PremiumMembers';
import { HowItWorks } from '../components/homepage/HowItWorks';
import { Statistic } from '../components/homepage/Statistic';
import SuccessStories from '../components/homepage/SuccessStories';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
            <Statistic></Statistic>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Homepage;