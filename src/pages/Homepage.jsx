import React from 'react';
import Banner from '../components/Banner/Banner';
import PremiumMembers from '../components/homepage/PremiumMembers';
import { HowItWorks } from '../components/homepage/HowItWorks';
import { Statistic } from '../components/homepage/Statistic';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
            <Statistic></Statistic>
        </div>
    );
};

export default Homepage;