import React from 'react'
import { Link } from 'react-router-dom'
import CardLayout from '../../Layout/CardLayout/CardLayout'

const Cardİtem = ({ id, src, cardHeader }) => {
    return (
        <CardLayout>
            <Link to={`/meal/${id}`}>
                <img src={src}
                    alt={cardHeader}
                    className="w-full h-2/3 object-contain bg-no-repeat object-center" />
                <div className='flex flex-col items-center flex-1'>
                    <div className='text-lg mt-5'>{cardHeader}</div>
                </div>
            </Link>
        </CardLayout>
    )
}

export default Cardİtem