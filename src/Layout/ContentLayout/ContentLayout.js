import React from 'react'

const ContentLayout = ({ children }) => {
    return (
        <div className='min-h-full bg-slate-200 w-full p-5'>
            {children}
        </div>
    )
}

export default ContentLayout