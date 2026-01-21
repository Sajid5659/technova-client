import { use, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { FiEdit } from 'react-icons/fi';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Dashboard = () => {
    const {user, dbUser, setdbUser } = use(AuthContext)
    console.log(dbUser);

    useEffect(()=>{
        if(user?.uid){
            fetch(`http://localhost:3000/users/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log("User data from MongoDB:", data)
                    setdbUser(data)
                })
                .catch(err => console.error("Error fetching user:", err))
        }
    },[user?.uid, setdbUser])
    return (
        <div className='mt-16'>
            <div className='min-h-screen mt-24 max-w-[90%] mx-auto relative'>
                <div className='flex flex-col md:flex-row items-center gap-6   p-10 rounded-xl border border-secondary/20 shadow-sm'>
                    <img className='w-40 h-40 object-cover rounded-full' src={dbUser?.photoUrl} alt="" />
                    <div className=' text-center md:text-left'>
                        <span className='px-3 py-1 rounded-full text-blue-900 bg-blue-100'>{dbUser?.role}</span>
                        <h1 className='text-2xl font-semibold'>{dbUser?.name}</h1>
                        <h1 className='text-accent flex gap-2 items-center'><IoMail />{dbUser?.email}</h1>
                        <p className='flex items-center gap-2 text-accent'><FaMapLocationDot />{dbUser?.address}</p>
                        <p className='flex items-center gap-2 text-accent'><FaPhoneAlt />{dbUser?.phone}</p>
                    </div>
                </div>
                <button  className='cursor-pointer text-secondary absolute top-5 right-5'><FiEdit size={24} /></button>
            </div>
        </div>
    );
};

export default Dashboard;