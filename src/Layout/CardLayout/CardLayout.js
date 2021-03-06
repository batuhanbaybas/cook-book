import React from 'react'

const CardLayout = ({ children }) => {
    return (
        <div className='w-1/4 h-2/3 bg-primary-light m-5 p-5 relative  cursor-pointer rounded-2xl'>
            {children}
        </div>
    )
}

export default CardLayout