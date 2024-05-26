import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const DoPost = () => {
    const { darkMode } = useContext(AuthContext)
    const handlePost = () => {

    }
    return (
        <div className='max-h-[400px] p-4 border rounded-md shadow-red-400 border-dashed shadow-sm text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
            <form onSubmit={handlePost}>

                <div className='my-2'>
                    <h2 className='mb-2'>রোগীর নাম :</h2>
                    <input type="text" name="PatientName" className='bg-transparent w-full border-2 p-2' />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">রোগীর অবস্থান:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="patientLocation">
                        <option value="khilgaon" className='text-xl'>খিলগাঁও, ঢাকা</option>
                        <option value="Malibag" className='text-xl'>মালিবাগ, ঢাকা</option>
                        <option value="Mirpur" className='text-xl'>মিরপুর, ঢাকা</option>
                        <option value="Uttora" className='text-xl'>উত্তরা, ঢাকা</option>
                        <option value="Gulshan" className='text-xl'>গুলশান, ঢাকা</option>
                        <option value="Motijhil" className='text-xl'>মতিঝিল, ঢাকা</option>
                        <option value="Banasree" className='text-xl'>বনশ্রী, ঢাকা</option>
                        <option value="AB-" className='text-xl'>AB-</option>
                    </select>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">রক্তের গ্রুপ:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="bloodGroup">
                        <option value="A+" className='text-xl'>A+</option>
                        <option value="A-" className='text-xl'>A-</option>
                        <option value="B+" className='text-xl'>B+</option>
                        <option value="B-" className='text-xl'>B-</option>
                        <option value="O+" className='text-xl'>O+</option>
                        <option value="O-" className='text-xl'>O-</option>
                        <option value="AB+" className='text-xl'>AB+</option>
                        <option value="AB-" className='text-xl'>AB-</option>
                    </select>
                </div>

                <div className='my-2'>
                    <h2 className='mb-2'>বিস্তারিত লিখুন:</h2>
                    <textarea required id="post" name="doPost" rows="4" cols="50" className='w-full max-h-44 rounded-md bg-transparent border-2'>
                    </textarea>
                </div>
            </form>
        </div>
    );
};

export default DoPost;