import React from 'react'

const CategoryItem = ({ src, alt, categoriName }) => {
    return (
        <div className='flex flex-col justify-center items-center mr-3'>
            <img src={src}
                alt={alt} className='w-24 h-24 rounded-full object-cover' />
            <div className='text-sm'>
                {categoriName}
            </div>
        </div>
    )
}

export default CategoryItem