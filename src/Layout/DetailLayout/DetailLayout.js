import React from 'react'

const DetailLayout = ({ children }) => {
    return (
        <div className='w-11/12  h-screen mx-auto flex bg-primary-light'>
            {children}
        </div>
    )
}

export default DetailLayout