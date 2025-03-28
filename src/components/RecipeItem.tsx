import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import '../styles/RecipeItem.css';

interface Recipe {
    id: number; 
    title: string;  
    image: string;  
}

const RecipeItem: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

    const isFavorite = favorites.some((fav) => fav.id === recipe.id);

    return (
        <div className="recipe-item">
            <Link to={`/details/${recipe.id}`}>
                <img
                    src={recipe.image || '/placeholder.jpg'}
                    alt={recipe.title}
                    className="recipe-item__image"
                />
                <p className="recipe-item__title">{recipe.title}</p>
            </Link>

            <button
                className={`recipe-item__fav-btn ${isFavorite ? 'remove' : 'add'}`}
                onClick={() => (isFavorite ? removeFromFavorites(recipe.id) : addToFavorites(recipe))}
            >
                {isFavorite ? 'delete' : 'add'}
            </button>
        </div>
    );
};

export default RecipeItem;
