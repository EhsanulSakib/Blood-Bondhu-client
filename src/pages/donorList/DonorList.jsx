import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constVariables/constVariable";
import { AuthContext } from "../../provider/AuthProvider";

const DonorList = () => {
    const { loading, setLoading } = useContext(AuthContext)
    const [donors, setDonors] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/donor`)
            .then(res => {
                setDonors(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])



    return (
        <div className="overflow-x-auto max-w-screen my-4 md:my-8 lg:my-12 min-h-screen">
            <h2 className=" my-4 lg:my-12 text-center text-2xl lg:text-3xl xl:text-5xl">রক্তদাতাদের তালিকা</h2>
            <table className="table text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl ">
                {/* head */}
                <thead className="text-xs md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                    <tr>
                        <th>#</th>
                        <th>নাম</th>
                        <th>ঠিকানা</th>
                        <th>রক্তর গ্রুপ</th>
                        <th>মোবাইল</th>
                    </tr>
                </thead>
                <tbody className="text-xs md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                    {
                        donors?.map((donor, idx) => <tr key={donor._id}>
                            <th>{idx + 1}</th>
                            <td>{donor.donorName}</td>
                            <td>{donor.address}</td>
                            <td>{donor.bloodGroup}</td>
                            <td>{donor.phone}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DonorList;