import React from 'react';

import loginImage from '../../assets/undraw_thought_process_re_om58.svg'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
    return (
        <div className='mx-10 mt-3 border   rounded-xl  '>
            {/* <h2 className='text-2xl py-4 text-center font-bold'>Welcome to Paikgacha.com</h2> */}

            <div className='bg-primary py-5 text-white'>
                <h1 className='text-center text-2xl font-bold'>Login/SignUp</h1>

                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='pt-4 grid grid-cols-12 items-center'>

                <div className='col-span-8'>

                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="ml-5 text-center lg:text-left">
                                <h1 className="text-2xl text-center font-bold">Login with</h1>
                                {/* <p className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p> */}
                                <div className='flex gap-5 py-4'>
                                    <button className="btn btn-active btn-primary bg-blue-600 "><FaFacebook className='text-xl' /> Facebook</button>


                                    <button className="btn btn-active btn-secondary bg-pink-600"> <FaGoogle /> Google</button>
                                </div>

                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form className="card-body  ">

                                   <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-4'>

                    <img src={loginImage} alt="login" />

                </div>

            </div>
        </div>
    );
};

export default SignIn;