import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        
    }
    return (
        <div className='mt-16'>
            <div className="min-h-screen w-full relative bg-white">
                {/* Teal Glow Top */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#ffffff",
                        backgroundImage: `
                                 radial-gradient(
                                 circle at top center,
                                 rgba(66, 105, 226, 0.2),
                                 transparent 70%
                                )
                                  `,
                        filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                {/* Your Content/Components */}
                <div className='flex justify-center mt-16 py-16'>
                    <div className="card bg-base-100 w-[350px] md:w-lg shrink-0 shadow-lg">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center py-3'>Register your account</h1>
                            <form onSubmit={handleRegister} className='space-y-3'>
                                <div>
                                    <p className='text-accent '>Name</p>
                                    <input name='name' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Name' />
                                </div>
                                <div>
                                    <p className='text-accent '>Photo</p>
                                    <input name='photoUrl' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter photo-url' />
                                </div>
                                <div>
                                    <p className='text-accent '>Address</p>
                                    <input name='Address' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter photo-url' />
                                </div>
                                <div>
                                    <p className='text-accent '>Email</p>
                                    <input name='email' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Email' required />
                                </div>
                                <div>
                                    <p className='text-accent '>Password</p>
                                    <input name='password' className='input w-full rounded-md input-bordered' type="text" placeholder='Enter Password' required />

                                </div>
                                <p className='text-sm text-red-700 '>{}</p>
                                <input className='btn btn-secondary shadow-none w-full my-3' type="submit" value="Register" />
                                <p className='text-center font-medium'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;