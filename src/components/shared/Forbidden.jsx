import React from 'react';
import forbiddenIMG from '../../assets/ForbidenImage.png';
const Forbidden = () => {
    return (
        <div>

            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={forbiddenIMG} alt="" className='h-130'/>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-primary'>You Don't Have Access To This Page</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Forbidden;