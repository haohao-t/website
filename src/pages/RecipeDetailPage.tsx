import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RecipeDetailPage.css';

const API_KEY = '69477d1a2670469d95e28af3374f085e';

interface Recipe {
    title: string;
    image: string;
    summary: string;
    instructions: string;
}

const RecipeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information`,
                    {
                        params: {
                            apiKey: API_KEY,
                        },
                    }
                );
                const recipeData = {
                    title: response.data.title,
                    image: response.data.image,
                    summary: response.data.summary,
                    instructions: response.data.instructions,
                };
                setRecipe(recipeData);
            } catch (error) {
                console.error('Error load data:', error);
            }
        };

        if (id) {
            fetchRecipeDetails();
        }
    }, [id]);

    if (!recipe) return <p>Загрузка...</p>;

    return (
        <div className="recipe-detail">
            <button className="back-button" onClick={() => navigate(-1)}>
                Back
            </button>
            <h2 className="recipe-detail__title">{recipe.title}</h2>
            <img
                className="recipe-detail__image"
                src={recipe.image || '/placeholder.jpg'}
                alt={recipe.title}
            />
            <div
                className="recipe-detail__summary"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
            <div
                className="recipe-detail__instructions"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            />
        </div>
    );
};

export default RecipeDetailPage;
