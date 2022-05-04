import { FavoriteBorderSharp } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardLayout from '../../Layout/CardLayout/CardLayout'
import { addFavorite, selectFavorites } from '../../Redux/features/favoriteSlice'

const Cardİtem = (props) => {
    const dispatch = useDispatch()
    const favorite = useSelector(selectFavorites)
    const handleAdd = (item) => {
        dispatch(addFavorite(item))
    }
    return (
        <CardLayout>
            <div onClick={() => handleAdd(props)} className='absolute top-7 left-7 bg-primary-light border-2 rounded-full'>
                <IconButton >
                    {
                        favorite.some(item => item.id === props.id) ?
                            <FavoriteIcon />
                            :
                            <FavoriteBorderSharp />
                    }
                </IconButton>
            </div>
            <Link to={`/meal/${props.id}`}>
                <img src={props.src}
                    alt={props.cardHeader}
                    className="w-full h-2/3 object-contain bg-no-repeat object-center rounded-xl" />

                <div className='flex flex-col items-center flex-1'>
                    <div className='text-lg mt-5'>{props.cardHeader}</div>
                </div>
            </Link>
        </CardLayout>
    )
}

export default Cardİtem