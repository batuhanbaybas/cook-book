
import { BASE_URL } from '../Comon/Common';
import Detail from '../Components/Detail/Detail'
import Error from '../Components/Error/Error';

import Loading from "../Components/Loading/Loading";
import useFetch from '../Hooks/useFetch';
import ContentLayout from '../Layout/ContentLayout/ContentLayout';

const HomePage = () => {
    const { data, error, loading } = useFetch(`${BASE_URL}random.php`);
    return (
        <ContentLayout>
            {
                loading && <Loading />
            }
            {
                error && <Error message={error.message} />
            }
            {
                data.meals &&
                <Detail meal={data.meals[0]} />
            }
        </ContentLayout>
    )
}

export default HomePage