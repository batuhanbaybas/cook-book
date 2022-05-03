import React from 'react'

const DetailLayout = ({ children }) => {
    return (
        <div className='w-11/12  h-screen mx-auto flex bg-white'>
            {children}
        </div>
    )
}

export default DetailLayout