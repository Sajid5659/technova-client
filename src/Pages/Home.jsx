import React, { use } from 'react';
import Banner from '../Components/Banner';
import Faq from '../Components/Faq';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const Home = () => {
    const {user} = use(AuthContext)
    console.log(user);
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <Faq></Faq>
        </div>
    );
};

export default Home;