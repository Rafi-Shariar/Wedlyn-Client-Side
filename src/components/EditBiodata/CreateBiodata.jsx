import React from 'react';
import { IoCreate } from "react-icons/io5";
import { Link } from 'react-router';
const CreateBiodata = () => {
    return (
        <div className='max-w-3xl mx-auto bg-gradient-to-bl from-sky-100 to-sky-400 text-center p-14 rounded-3xl shadow-2xl mt-20'>
            <h1 className='text-xl text-red-600 font-semibold'>You don't have a biodata yet !</h1>
            <h2 className="text-4xl font-bold mb-6 text-primary mt-4">
              <IoCreate className='inline mb-2'/>  Create Your Biodata
             </h2>

             <div>
                <Link to={'createbiodata'} className='bg-yellow-300 p-2 px-10 rounded-2xl font-semibold hover:bg-yellow-100'>Create</Link>
             </div>
        </div>
    );
};

export default CreateBiodata;