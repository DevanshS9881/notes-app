import React, { useState } from 'react';
import { getInitials } from '../../utils/helper';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from 'react-hot-toast';

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [phone, setPhone] = useState(user?.phone || '')
    const [email, setEmail] = useState(user?.email || '')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalClose = () => {

        setIsModalOpen(false);
    }

    const handleModalSave = (newPhone) => {
        setPhone(newPhone);
        toast.success('Phone number updated', {
            style: {
                fontSize: '13px',
                maxWidth: '400px',
                boxShadow: 'px 4px 8px rgba(0, 1, 4, 0.1)',
                borderRadius: '8px',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                marginRight: '10px',
            }
        });
        setIsModalOpen(false);
    }

    return (
        <div className="bg-gray-50">
            <Navbar userInfo={user} />
            <div className='flex'>
                <Link to='/dashboard'>
                    <div className='p-5'>
                        <button className='inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700'>
                            <IoMdArrowRoundBack />
                        </button>
                    </div>
                </Link>
                <div className="container mx-auto my-28">
                    <div>
                        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center p-3 rounded-full text-slate-950  font-medium bg-gray-50 cursor-pointer mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110 text-4xl cursor-default">
                                    {getInitials(user.fullName)}
                                </div>
                            </div>

                            <div className="mt-16">
                                {user && (
                                    <>
                                        <h1 className="font-bold text-center text-3xl text-gray-900">{user.fullName}</h1>
                                        <p className="text-center text-sm mt-2 text-gray-400 font-medium">{user.email}</p>
                                    </>
                                )}
                                <p>
                                    <span></span>
                                </p>

                                <div className="w-full">
                                    {/* My Account */}
                                    <h3 className="font-medium text-xl  mt-8 pb-3 text-gray-900 text-center px-2">My Account</h3>
                                    <div className=" w-full flex flex-col items-center overflow-hidden text-sm">
                                        <p className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            {user?.fullName || 'User Name'}
                                        </p>

                                        <div className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            <p>
                                                {user?.email || 'User Email'}
                                            </p>
                                            <button
                                                className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2 text-xs dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
                                                Change Email
                                            </button>
                                        </div>

                                        <p className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            {user?.phone || 'User Phone'}
                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2 text-xs dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
                                                Add Phone
                                            </button>
                                        </p>

                                        {/* Modal for phone number  */}
                                        {isModalOpen && (
                                            <div className='fixed inset-0 flex  items-center justify-center z-50 bg-black bg-opacity-50'>
                                                <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                                                    <h2 className='text-xl font-bold mb-4'>Enter Phone Number</h2>
                                                    <input
                                                        type="text"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className='w-full p-2 mb-4 border rounded'
                                                        placeholder='Phone Number'
                                                    />
                                                    <div className='flex justify-end space-x-2'>
                                                        <button
                                                            onClick={handleModalClose}
                                                            className='inline-flex items-center text-gray-900 bg-gray-400 hover:bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  text-xs dark:bg-gray-300 dark:hover:bg-gray-100 hover:border-1 dark:border-gray-700 transition-all'
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={handleModalSave}
                                                            className='inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  text-xs dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 transition-all'

                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <p className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            Connect with:
                                            <div className="flex pt-3 justify-between items-center gap-6 px-2 ">
                                                <a className="text-gray-800 bg-gray-300  border border-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded-md cursor-pointer transition duration-150 ease-in font-medium text-xs text-center w-full py-3">Instagram</a>
                                                <a className="text-gray-800 bg-gray-300  border border-gray-300 hover:text-gray-900 hover:bg-gray-100 rounded-md cursor-pointer transition duration-150 ease-in font-medium text-xs text-center w-full py-3">Twitter</a>
                                                <a className="text-gray-800 bg-gray-300  border border-gray-300 hover:text-gray-900 hover:bg-gray-100    rounded-md cursor-pointer transition duration-150 ease-in font-medium text-xs text-center w-full py-3">Email</a>
                                            </div>
                                        </p>
                                    </div>

                                    {/* My Settings  */}
                                    <h3 className="font-medium text-xl  mt-12 pb-3 text-gray-900 text-center px-2">My Settings</h3>
                                    <div className="w-full flex flex-col items-center overflow-hidden text-sm">

                                        <p className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            Allow Notifications
                                            <label className="inline-flex p-3 items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </p>

                                        <p className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            Dark Mode

                                            <label className="inline-flex p-3 items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </p>

                                        <p className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            2-step verification
                                            <label className="inline-flex p-3 items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </p>
                                        <p className="flex justify-between items-center w-full border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 hover:bg-gray-100 transition duration-150">
                                            Set timezone automatically using your location
                                            <label className="inline-flex p-3 items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </p>

                                        <p className="w-full border-t text-red-500 border cursor-pointer border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            Delete my account
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;