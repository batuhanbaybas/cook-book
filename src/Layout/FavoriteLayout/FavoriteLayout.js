import React from 'react'
import ContentLayout from '../ContentLayout/ContentLayout'

const FavoriteLayout = ({ children }) => {
    return (
        <ContentLayout>
            <div className='w-10/12 min-h-fit mx-auto border-2 bg-white'>
                <h3 className='text-2xl text-center py-5'>Favori Tarifler</h3>
             
                    {children}
               
            </div>
        </ContentLayout>
    )
}

export default FavoriteLayout