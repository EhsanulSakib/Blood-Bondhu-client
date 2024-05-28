import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { BASE_URL } from '../../constVariables/constVariable';

const DonorForm = () => {
    const { darkMode, user } = useContext(AuthContext)
    const [rating, setRating] = useState('')
    const navigate = useNavigate()

    const handleAddDonor = event => {
        event.preventDefault();

        const form = event.target

        const donorName = form.donorName.value
        const phone = form.phone.value
        const email = form.email.value
        const bloodGroup = form.bloodGroup.value
        const gender = form.gender.value
        const DOB = form.DOB.value
        const address = form.address.value
        const lastDonate = form.lastDonate.value

        const donorInfo = { donorName, phone, email, bloodGroup, gender, DOB, address, lastDonate }
        console.log(donorInfo)
        fetch(`${BASE_URL}/donor`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donorInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId)
                Swal.fire({
                    title: 'অভিনন্দন',
                    text: 'আপনার রেজিস্ট্রেশন সফল হয়েছে!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    navigate('/')
                })
            })
    }

    return (
        <div className="w-11/12 md:w-5/6 m-auto my-4 md:my-8 lg:my-12 min-h-[80vh] shadow-xl p-4 md:p-8 border rounded-lg border-dashed border-red-400">
            <h2 className="font-extrabold text-center text-2xl md:text-3xl mb-4 text-red-600">ডোনার রেজিস্ট্রেশন ফর্ম</h2>

            <form onSubmit={handleAddDonor} className="w-11/12 m-auto flex flex-col gap-12 my-4 md:my-8 lg:my-12 rounded-lg">
                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">নাম:</h2>
                    <input required type="text" placeholder="নাম লিখুন (বাংলায় অথবা ইংরেজিতে)" className={`input rounded-md border-4 input-bordered w-full bg-inherit `} name="donorName" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">মোবাইল নাম্বার (ইংরেজি):</h2>
                    <input required type="number" placeholder="মোবাইল নাম্বার লিখুন" className={`input rounded-md border-4 input-bordered w-full bg-inherit`} name="phone" />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold ">ইমেইল (ইংরেজি):</h2>
                    <input required defaultValue={user.email} type="email" placeholder="মোবাইল নাম্বার লিখুন" className={`input  rounded-md border-4 input-bordered w-full bg-inherit`} name="email" />
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
                    <h2 className="mb-2 font-bold ">লিঙ্গ:</h2>

                    <div className='flex'>
                        <div className='flex gap-1 mr-3'>
                            <input type="radio" required name="gender" value="male" />
                            <p>পুরুষ</p>
                        </div>

                        <div className='flex gap-1'>
                            <input type="radio" required name="gender" value="female" />
                            <p>মহিলা</p>
                        </div>
                    </div>
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold text-xl">জন্ম তারিখ:</h2>
                    <input required type="date" name="DOB" className='w-full p-2 rounded-md border-4 bg-transparent' />
                </div>

                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">সর্বশেষ রক্তদানের তারিখ:</h2>
                    <input required type="date" name="lastDonate" className='w-full p-2 rounded-md border-4 bg-transparent' />
                </div>


                <div className='text-base lg:text-xl'>
                    <h2 className="mb-2 font-bold">ঠিকানা:</h2>
                    <select required className={`input rounded-md input-bordered ${darkMode ? ' bg-gray-800' : ' bg-slate-100'} w-full cursor-pointer border-4`} name="address">
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

                <input type="submit" value="রেজিস্টার করুন" className="btn-lg rounded-md text-lg bg-red-400 border-none cursor-pointer font-bold text-white col-span-2 py-2 w-full" />
            </form>
        </div>
    );
};

export default DonorForm;