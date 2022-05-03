import React from 'react'
import DetailLayout from '../../Layout/DetailLayout/DetailLayout'

const Detail = ({ meal }) => {
    return (
        <DetailLayout>
            <img src={meal.strMealThumb} alt='' className='w-1/4 h-full object-contain px-5 border-r-2 ' />
            <div className='flex flex-col flex-1 px-5'>
                <div className={"p-5 flex justify-between"}>
                    <h2 className='text-3xl'>
                        {meal.strMeal} / {meal.strCategory}
                    </h2>
                    <div className='bg-red-500 p-2 text-white rounded-3xl'>
                        <a href={meal.strYoutube} target='_blank' rel='noopener noreferrer'> Watch On Video</a>
                    </div>
                </div>
                <div className={"flex flex-1 mt-5"}>
                    <div className={"w-1/2 px-3"}>{meal.strInstructions}</div>
                    <div className={"w-1/2 px-3"}>
                        <div className='px-6'>
                            <div className='text-2xl mb-5 text-center'>Ingredients</div>
                            <div className='text-lg flex items-center justify-center'>
                                <div>

                                    {
                                        meal.strIngredient1 &&
                                        <div>{meal.strIngredient1}</div>
                                    }
                                    {
                                        meal.strIngredient2 &&
                                        <div>{meal.strIngredient2}</div>
                                    }
                                    {
                                        meal.strIngredient3 &&
                                        <div>{meal.strIngredient3}</div>
                                    }
                                    {
                                        meal.strIngredient4 &&
                                        <div>{meal.strIngredient4}</div>
                                    }
                                    {
                                        meal.strIngredient5 &&
                                        <div>{meal.strIngredient5}</div>
                                    }
                                    {
                                        meal.strIngredient6 &&
                                        <div>{meal.strIngredient6}</div>
                                    }
                                    {
                                        meal.strIngredient7 &&

                                        <div>{meal.strIngredient7}</div>
                                    }
                                    {
                                        meal.strIngredient8 &&
                                        <div>{meal.strIngredient8}</div>
                                    }
                                    {
                                        meal.strIngredient9 &&
                                        <div>{meal.strIngredient9}</div>
                                    }
                                    {
                                        meal.strIngredient10 &&
                                        <div>{meal.strIngredient10}</div>
                                    }
                                    {
                                        meal.strIngredient11 &&
                                        <div>{meal.strIngredient11}</div>
                                    }
                                    {
                                        meal.strIngredient12 &&
                                        <div>{meal.strIngredient12}</div>
                                    }
                                    {
                                        meal.strIngredient13 &&
                                        <div>{meal.strIngredient13}</div>
                                    }
                                    {
                                        meal.strIngredient14 &&
                                        <div>{meal.strIngredient14}</div>
                                    }
                                    {
                                        meal.strIngredient15 &&
                                        <div>{meal.strIngredient15}</div>
                                    }
                                    {
                                        meal.strIngredient16 &&
                                        <div>{meal.strIngredient16}</div>
                                    }
                                    {
                                        meal.strIngredient17 &&
                                        <div>{meal.strIngredient17}</div>
                                    }
                                    {
                                        meal.strIngredient18 &&
                                        <div>{meal.strIngredient18}</div>
                                    }
                                    {
                                        meal.strIngredient19 &&
                                        <div>{meal.strIngredient19}</div>
                                    }
                                    {
                                        meal.strIngredient20 &&
                                        <div>{meal.strIngredient20}</div>
                                    }

                                </div>
                                <div className='ml-5'>
                                    {
                                        meal.strMeasure1 &&
                                        <div>{meal.strMeasure1}</div>
                                    }
                                    {
                                        meal.strMeasure2 &&
                                        <div>{meal.strMeasure2}</div>
                                    }
                                    {
                                        meal.strMeasure3 &&
                                        <div>{meal.strMeasure3}</div>
                                    }
                                    {
                                        meal.strMeasure4 &&
                                        <div>{meal.strMeasure4}</div>
                                    }
                                    {
                                        meal.strMeasure5 &&
                                        <div>{meal.strMeasure5}</div>
                                    }
                                    {

                                        meal.strMeasure6 &&
                                        <div>{meal.strMeasure6}</div>
                                    }
                                    {
                                        meal.strMeasure7 &&
                                        <div>{meal.strMeasure7}</div>
                                    }
                                    {
                                        meal.strMeasure8 &&
                                        <div>{meal.strMeasure8}</div>
                                    }
                                    {
                                        meal.strMeasure9 &&
                                        <div>{meal.strMeasure9}</div>
                                    }
                                    {
                                        meal.strMeasure10 &&
                                        <div>{meal.strMeasure10}</div>
                                    }
                                    {
                                        meal.strMeasure11 &&
                                        <div>{meal.strMeasure11}</div>
                                    }
                                    {
                                        meal.strMeasure12 &&
                                        <div>{meal.strMeasure12}</div>

                                    }
                                    {
                                        meal.strMeasure13 &&
                                        <div>{meal.strMeasure13}</div>
                                    }
                                    {
                                        meal.strMeasure14 &&
                                        <div>{meal.strMeasure14}</div>
                                    }
                                    {
                                        meal.strMeasure15 &&
                                        <div>{meal.strMeasure15}</div>
                                    }
                                    {

                                        meal.strMeasure16 &&
                                        <div>{meal.strMeasure16}</div>
                                    }
                                    {
                                        meal.strMeasure17 &&
                                        <div>{meal.strMeasure17}</div>
                                    }
                                    {
                                        meal.strMeasure18 &&
                                        <div>{meal.strMeasure18}</div>
                                    }
                                    {
                                        meal.strMeasure19 &&
                                        <div>{meal.strMeasure19}</div>
                                    }
                                    {
                                        meal.strMeasure20 &&
                                        <div>{meal.strMeasure20}</div>
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DetailLayout >

    )
}

export default Detail