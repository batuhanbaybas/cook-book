import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../../Redux/features/favoriteSlice'

const FavoriteItem = (props) => {
    const dispatch = useDispatch()
    const handleDelete = (itemId) => {
       
        dispatch(deleteFavorite({itemId}))
    }
    return (
        <div className='mx-52 border-2 my-3 min-h-fit p-5 '>
            <div className='flex items-center px-10'>
                <Link to={`/meal/${props.itemId}`} className='flex items-center'>
                    <img src={props.src} alt={props.cardHeader}
                        className='w-20 h-20  object-cover object-center rounded-full' />
                    <div className='ml-5'>{props.cardHeader}</div>
                </Link>
                <button onClick={() => handleDelete(props.itemId)} className='ml-auto border px-5 py-2 bg-red-700 text-white '>
                    Sil
                </button>
            </div>
        </div>



    )
}

export default FavoriteItem