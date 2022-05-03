import React from 'react'

const CardLayout = ({ children }) => {
    return (
        <div className='w-1/4 h-2/3 bg-white m-5 p-5  cursor-pointer rounded-2xl'>
            {children}
        </div>
    )
}

export default CardLayout