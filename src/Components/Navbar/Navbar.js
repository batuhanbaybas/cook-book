import { FavoriteBorderSharp } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBarLayout from '../../Layout/NavBarLayout/NavBarLayout'
import { selectFavorites } from '../../Redux/features/favoriteSlice'


const Navbar = () => {
    const favorite = useSelector(selectFavorites)
    return (
        <NavBarLayout>
            <div className='px-3 py-5 flex items-center justify-between'>
                <Link to={"/"} className='text-2xl'>Tarifler</Link>

                <Link to={"/favoriler"} className={"border-2 p-3 flex items-center relative"}>
                    Favoriler
                    {
                        favorite.length > 0 ?
                            <>
                                <FavoriteIcon className='ml-2' />

                                <div className='absolute -top-3 -left-3 w-8 h-8  border-2 flex justify-center items-center rounded-full bg-red-500'>
                                    <div className='text-center text-sm text-white'>
                                        {favorite.length}
                                    </div>

                                </div>

                            </>
                            :
                            <FavoriteBorderSharp className='ml-2' />
                    }




                </Link>

            </div>
        </NavBarLayout>

    )
}

export default Navbar