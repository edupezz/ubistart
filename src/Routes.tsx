import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/home';
import ErrorPage from './pages/errorPage/errorPage';
import DrinkPage from './pages/drinkPage/drinkPage';
import Categories from './pages/categories/categories';

const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path="/pages/drinkPage/:id" element={<DrinkPage />} />
            <Route path='/pages/categories/categories' element={<Categories />} />

            <Route path='*' element={<ErrorPage/>} />
        </Routes>

    )
}

export default Router;