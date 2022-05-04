import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Comon/Common';
import useFetch from '../../Hooks/useFetch'
import ContentLayout from '../../Layout/ContentLayout/ContentLayout'
import Cardİtem from '../CardItem/Cardİtem'
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const Content = () => {
    const { category } = useParams()
    const { data, loading, error } = useFetch(`${BASE_URL}filter.php?c=${category}`)

    return (
        <ContentLayout>
            <div className='flex flex-wrap justify-center'>
                {
                    loading && <Loading />
                }
                {
                    error && <Error message={error.message} />
                }
                {
                    data.meals &&
                    data.meals.map(item => (

                        <Cardİtem key={item.idMeal} id={item.idMeal} src={item.strMealThumb} cardHeader={item.strMeal} />

                    ))
                }
            </div>
        </ContentLayout>
    )
}

export default Content