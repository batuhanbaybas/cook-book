import React from 'react'
import { BASE_URL } from '../../Comon/Common';
import useFetch from '../../Hooks/useFetch'
import CategoriesLayout from '../../Layout/CategoriesLayout/CategoriesLayout'
import CategoryItem from '../CategoryItem/CategoryItem'
import Error from "../Error/Error";
import Loading from "../Loading/Loading";


const Categories = () => {
    const { data, error, loading } = useFetch(`${BASE_URL}categories.php`)
    return (

        <CategoriesLayout>
            {
                error && <Error nessage={error.message} />
            }
            {
                loading && <Loading />
            }
            {
                data.categories &&
                data.categories.map(item => (
                    <CategoryItem
                        key={item.idCategory}
                        src={item.strCategoryThumb}
                        alt={item.strCategory}
                        categoriName={item.strCategory} />

                ))
            }
        </CategoriesLayout>
    )
}

export default Categories