import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../assets/images/login/login.svg';
import { AuthContext } from '../Contex/Contex'


const Login = () => {


    const { login, forgetPassword } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')
    const [emailError, setemailError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then((res) => {

                const user = res.user;
                const currentUser = {
                    email: user.email
                }


                setemailError('')
                setError('')
                // get jwt token 
                fetch('https://genius-car-server-beryl-nu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true })
                    })
                form.reset()
                toast.success('Login Success')

            })
            .catch((error) => {
                console.log(error);
                setemailError('Invalid Email')
                setError("wrong password")
            });

    }


    const forgetPass = () => {
        forgetPassword(userEmail)
            .then(() => {
                toast
                    .success('Check your email To reset password')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onBlur={(event) => setUserEmail(event.target.value)}
                                    type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <p className='text-red-500	'>{emailError}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <p className='text-red-500	'>{error}</p>
                                <label className="label">
                                    <p onClick={forgetPass} className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
