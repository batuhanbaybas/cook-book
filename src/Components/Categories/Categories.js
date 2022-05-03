import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesLayout from '../../Layout/CategoriesLayout/CategoriesLayout'
import { categorySelect } from '../../Redux/features/categorySlice'
import CategoryItem from '../CategoryItem/CategoryItem'
import Loaidng from '../Loading/Loaidng'




const Categories = () => {
    const category = useSelector(categorySelect)
    return (

        <CategoriesLayout>
            {
                category.loading && <Loaidng />
            }
            {
                category.categories.categories?.length > 0 && category.categories.categories.map(item => (
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