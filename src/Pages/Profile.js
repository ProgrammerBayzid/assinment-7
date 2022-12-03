import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../Contex/Contex'

const Profile = () => {


    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }


    return (
        <div className='grid justify-items-center mb-10 mt-10'>
            <div className='card'>
                <div className='w-24 items-center rounded-full'>
                    <span className='rounded-full'>
                        {user?.photoURL ?
                            <img src={user.photoURL} />
                            :
                            <p>No Photo</p>}
                    </span>
                </div>
                <div>
                    <h2 className="card-title ">Name: {user?.displayName ? user.displayName : 'Name Not Available'}</h2>
                    <p>Email: {user?.email}</p>
                    <p>ID: {user?.uid} </p>
                    <p> Email Status: {user?.emailVerified ? <span className=''>Verified</span> : <span className=''>Not Verified</span>} </p>
                </div>
            </div>
            <div className='mt-5'>
                <button
                    onClick={handelLogOut}
                    className='w-full px-8 py-3 font-bold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Profile
