import React from 'react';
import Banner from '../components/Banner/Banner';
import PremiumMembers from '../components/homepage/PremiumMembers';
import { HowItWorks } from '../components/homepage/HowItWorks';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Homepage;