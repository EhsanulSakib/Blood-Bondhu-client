import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const DoPost = () => {
    const { darkMode } = useContext(AuthContext)
    const handlePost = () => {

    }
    return (
        <div className='h-[700px] p-4 border rounded-md shadow-red-400 border-dashed shadow-sm text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
            <form onSubmit={handlePost}>

                <div className='my-2'>
                    <h2 className='mb-2'>রোগীর নাম :</h2>
                    <input placeholder='রোগীর নাম লিখুন' type="text" name="PatientName" className='bg-transparent w-full border-2 px-4 py-2' />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">রোগীর অবস্থান:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="patientLocation">
                        <option value="খিলগাঁও, ঢাকা" className='text-xl'>খিলগাঁও, ঢাকা</option>
                        <option value="মালিবাগ, ঢাকা" className='text-xl'>মালিবাগ, ঢাকা</option>
                        <option value="মিরপুর, ঢাকা" className='text-xl'>মিরপুর, ঢাকা</option>
                        <option value="উত্তরা, ঢাকা" className='text-xl'>উত্তরা, ঢাকা</option>
                        <option value="গুলশান, ঢাকা" className='text-xl'>গুলশান, ঢাকা</option>
                        <option value="মতিঝিল, ঢাকা" className='text-xl'>মতিঝিল, ঢাকা</option>
                        <option value="বনশ্রী, ঢাকা" className='text-xl'>বনশ্রী, ঢাকা</option>
                        <option value="ডেমরা, ঢাকা" className='text-xl'>ডেমরা, ঢাকা</option>
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

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">মোবাইল নাম্বার (ইংরেজি):</h2>
                    <input required type="number" placeholder="মোবাইল নাম্বার লিখুন" className={`input rounded-md border-4 input-bordered w-full bg-inherit`} name="patientPhone" />
                </div>

                <div className='my-2'>
                    <h2 className='mb-2'>বিস্তারিত লিখুন:</h2>
                    <textarea placeholder='এখানে বিস্তারিত লিখুন' required id="post" name="doPost" rows="4" cols="50" className='w-full max-h-44 rounded-md bg-transparent border-2 p-4'>
                    </textarea>
                </div>

                <input type="submit" value="পোস্টটি শেয়ার করুন" className="btn-lg rounded-md text-lg bg-red-400 border-none cursor-pointer font-bold text-white col-span-2 py-2 w-full" />
            </form>
        </div>
    );
};

export default DoPost;