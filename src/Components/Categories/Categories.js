import React from 'react'
import useFetch from '../../Hooks/useFetch'
import CategoriesLayout from '../../Layout/CategoriesLayout/CategoriesLayout'
import CategoryItem from '../CategoryItem/CategoryItem'
import Error from "../Error/Error";
import error from "../Error/Error";
import Loaidng from "../Loading/Loading";


const Categories = () => {
    const {data, error, loading} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    return (

        <CategoriesLayout>
            {
                error && <Error nessage={error.message}/>
            }
            {
                loading && <Loaidng/>
            }
            {
                data.categories &&
                data.categories.map(item => (
                    <CategoryItem
                        key={item.idCategory}
                        src={item.strCategoryThumb}
                        alt={item.strCategory}
                        categoriName={item.strCategory}/>

                ))
            }
        </CategoriesLayout>
    )
}

export default Categories