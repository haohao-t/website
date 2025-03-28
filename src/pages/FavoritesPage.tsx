import { useFavorites } from "../hooks/useFavorites";
import RecipeItem from "../components/RecipeItem";
import "../styles/FavoritesPage.css"

const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();

    return (
        <div className="favorites-page">
            <h2>Favorites recipes</h2>
            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((recipe) => (
                        <RecipeItem key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <p className="favorites-list__empty">No favorite recipe</p>
            )}
        </div>
    );
};

export default FavoritesPage;