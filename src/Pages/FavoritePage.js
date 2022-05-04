import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteItem from '../Components/FavoriteItem/FavoriteItem'
import FavoriteLayout from '../Layout/FavoriteLayout/FavoriteLayout'
import { selectFavorites } from '../Redux/features/favoriteSlice'

const FavoritePage = () => {
    const favorite = useSelector(selectFavorites)
    return (
        <FavoriteLayout>
            {
                favorite.map(item => (

                    <FavoriteItem key={item.id} src={item.src} cardHeader={item.cardHeader} itemId={item.id} />
                ))
            }
        </FavoriteLayout >
    )
}

export default FavoritePage