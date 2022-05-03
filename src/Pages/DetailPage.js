import {useParams} from 'react-router-dom'
import Detail from '../Components/Detail/Detail'
import useFetch from '../Hooks/useFetch'
import ContentLayout from '../Layout/ContentLayout/ContentLayout'
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";

const DetailPage = () => {
    const {id} = useParams()
    const {data, loading, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

    return (
        <ContentLayout>
            {
                loading && <Loading/>
            }
            {
                error && <Error message={error.message}/>
            }
            {
                data.meals &&
                <Detail meal={data.meals[0]}/>
            }

        </ContentLayout>


    )
}

export default DetailPage