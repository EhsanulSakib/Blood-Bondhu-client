import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import logo from '/logo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDarkMode, MdLightMode, MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')
            })
            .then(notify)
            .catch()
    }

    const links = <>
        <ul className={`xl:flex flex-row gap-2 duration-300 top-16 md:top-[65px] absolute ${darkMode ? 'bg-gray-800' : 'bg-slate-100'} xl:static ${open ? 'left-0' : '-left-80'} p-10 xl:p-0 shadow-lg xl:shadow-none no-underline xl:gap-6 text-base lg:text-lg z-50 font-bold`}>
            <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2 '} to='/'>হোম</NavLink></li>

            {
                user ?
                    <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2'} to='/do-post'>পোস্ট করুন</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2'} to='/donor-register'>ডোনার রেজিস্ট্রেশন</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-1 xl:pb-0"><NavLink className={' focus:border-b-2'} to='/donor-list'>ডোনারদের তালিকা</NavLink></li>
                    :
                    ""
            }

            {
                user ?
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden focus:border-b-2" onClick={handleSignOut}>Sign Out</li>
                    :
                    <li className="mt-8 lg:mt-0 rounded-md lg:hidden">
                        <NavLink to='/login' className={'focus:border-b-2 '}>Login</NavLink>
                    </li>
            }
            {
                user ?
                    ""
                    :
                    <li className="lg:hidden"><NavLink className={'focus:border-b-2 '} to='/register'>Register</NavLink></li>
            }


        </ul>
    </>


    return (
        <nav className="flex items-center px-2 xl:px-4 py-2 xl:py-4 justify-between m-auto text-xl font-medium ">
            <div className="flex items-center xl:hidden">
                <div className="xl:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl " /> : <RiMenu2Line className="text-2xl " />
                    }
                </div>

                <div className="logo ml-2 flex gap-2 text-base xl:hidden items-center">
                    <img src={logo} alt="" className="w-[44px] pl-2" />
                    <h2 className="text-xl lg:text-2xl font-extrabold text-red-700">ব্লাড বন্ধু</h2>
                </div>
            </div>

            <div className="logo ml-2 hidden gap-2 xl:flex items-center ">
                <img src={logo} alt="" className="w-12" />
                <h2 className="text-3xl lg:text-4xl font-extrabold text-red-700">ব্লাড বন্ধু</h2>
            </div>


            <div className="flex flex-col lg:gap-8 lg:flex-row items-center">


                <div>
                    {links}
                </div>

                <div className="flex items-center z-10">
                    <div>
                        {
                            darkMode ?
                                <button className="btn btn-sm lg:btn-md btn-circle btn-ghost border-none text-white text-xl lg:text-3xl shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                    <MdLightMode />
                                </button>

                                :
                                <button className="btn btn-sm lg:btn-md btn-circle btn-ghost border-none text-gray-800 text-xl lg:text-3xl shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                    <MdDarkMode />
                                </button>

                        }
                    </div>
                    <div>
                        {
                            user ?
                                <div className="flex items-center gap-2">
                                    <div className={`flex gap-2 items-center ${darkMode ? 'bg-gray-600' : 'bg-slate-300'} py-1 pl-2 lg:px-2 rounded-full`}>
                                        <h2 className="font-bold text-xs lg:text-base 2xl:text-lg">{user.displayName}</h2>
                                        <img src={user.photoURL} alt="" className="w-8 lg:w-12 h-8 lg:h-12 object-cover object-top rounded-full " />
                                        <div>
                                            <button className={`btn btn-active  hidden btn-circle text-2xl font-extrabold lg:flex ${darkMode ? 'bg-gray-300 text-black' : 'bg-slate-700 text-white'}`} onClick={handleSignOut}><MdOutlineLogout /></button>
                                        </div>
                                    </div>
                                </div>

                                :
                                ""

                        }
                    </div>

                    <div className="hidden lg:flex mr-2">
                        {
                            user ?
                                ""
                                :
                                <button className="btn btn-active btn-ghost rounded-md text-sm lg:text-base">
                                    <Link to='/login'>লগইন</Link>
                                </button>
                        }
                    </div >

                    <div className="hidden lg:flex">
                        {
                            user ?
                                ""
                                :
                                <button className=" btn btn-active btn-ghost rounded-md text-sm lg:text-base" ><Link to='/register'>রেজিস্টার</Link></button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;