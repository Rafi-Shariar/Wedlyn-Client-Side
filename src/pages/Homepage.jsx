import React from 'react';
import Banner from '../components/Banner/Banner';
import PremiumMembers from '../components/homepage/PremiumMembers';
import { HowItWorks } from '../components/homepage/HowItWorks';
import { Statistic } from '../components/homepage/Statistic';
import SuccessStories from '../components/homepage/SuccessStories';
import WhyChooseUs from '../components/homepage/WhyChooseUs';
import Tips from '../components/homepage/Tips';

const Homepage = () => {
    document.title = "Wedlyn | Home";
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
            <Statistic></Statistic>
            <SuccessStories></SuccessStories>
            <WhyChooseUs></WhyChooseUs>
            <Tips></Tips>
        </div>
    );
};

export default Homepage;