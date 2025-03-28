import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesPage from '../pages/RecipesPage';
import FavoritesPage from '../pages/FavoritesPage';
import MainLayout from '../layouts/MainLayout';
import RecipeDetailPage from '../pages/RecipeDetailPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<RecipesPage />} />
                    <Route path="/details/:id" element={<RecipeDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
