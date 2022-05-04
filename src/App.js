import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import MainLayout from "./Layout/MainLayout/MainLayout";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
import FavoritePage from "./Pages/FavoritePage";

function App() {

  return (
    <MainLayout>
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/meal/:id" element={<DetailPage />} />
        <Route path="/:category" element={<Content />} />
        <Route path="/favoriler" element={<FavoritePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>

  );
}

export default App;
