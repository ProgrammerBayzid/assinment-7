import React from 'react'
import About from './About'
import Banner from './Banner'
import Services from './Services'

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    )
}

export default Home
