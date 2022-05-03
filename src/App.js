import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Categories from "./Components/Categories/Categories";
import Navbar from "./Components/Navbar/Navbar";
import MainLayout from "./Layout/MainLayout/MainLayout";
import { fetchAllCategory } from "./Redux/features/categorySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategory())
  }, [dispatch])
  return (
    <MainLayout>
      <Navbar />
      <Categories />
    </MainLayout>

  );
}

export default App;
