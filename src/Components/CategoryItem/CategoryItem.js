import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ src, alt, categoriName }) => {
    return (
        <Link to={`/${categoriName}`} className='flex flex-col justify-center items-center mr-3 cursor-pointer'>
            <img src={src}
                alt={alt} className='w-24 h-24 rounded-full object-cover' />
            <div className='text-sm'>
                {categoriName}
            </div>
        </Link>
    )
}

export default CategoryItem