import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/calculator">Goto Calculator</Link>
        </>
    )
}

export default Home