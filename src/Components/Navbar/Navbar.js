import React from 'react'
import { Link } from 'react-router-dom'
import NavBarLayout from '../../Layout/NavBarLayout/NavBarLayout'

const Navbar = () => {
    return (
        <NavBarLayout>
            <div className='px-3 py-5 flex items-center'>
                <Link to={"/"} className='text-2xl'>Tarifler</Link>
            </div>
        </NavBarLayout>

    )
}

export default Navbar