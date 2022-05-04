import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='min-h-full bg-primary-grey w-full p-5'>
            {children}
        </div>
    )
}

export default ContentLayout