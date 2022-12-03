import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg';

import { toast } from 'react-toastify'
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Contex/Contex';



const Register = () => {
    const { createUser, updateName, verifyEmail, googleSignin, } = useContext(AuthContext)

    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(res => {
                navigate('/')
                toast.success('Thanks For Registation')
                handelUpdetUser(name)
                handelEmailVeryfi()
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handelUpdetUser = (name) => {
        const profile = {
            displayName: name,

        }
        updateName(profile)
            .then(() => {
                toast.success('Update Profile')
            })
            .catch((error) => {
                toast.error(error.massage)
            });
    }

    const handelEmailVeryfi = () => {
        verifyEmail()
            .then(() => {
                toast.success('Verify Your Email')
            })
            .catch(error => {
                toast.error(error.massage)
            })
    }


    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                toast.success('Register Success')
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <button onClick={googleSubmit} aria-label='Log in with Google' className='p-3 rounded-sm'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 32 32'
                                className='w-5 h-5 fill-current'
                            >
                                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                            </svg>
                        </button>
                    </div>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register
