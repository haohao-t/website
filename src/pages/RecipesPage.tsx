import { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import axios from 'axios';
import '../styles/RecipesPage.css';

const API_KEY = '69477d1a2670469d95e28af3374f085e';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [dietType] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch`,
                    {
                        params: {
                            query: search,
                            apiKey: API_KEY,
                            number: 52,
                            addRecipeInformation: true,
                            diet: dietType || undefined,
                        },
                    }
                );
                setRecipes(response.data.results || []);
            } catch (error) {
                console.error('Errol load data:', error);
            }
        };

        fetchRecipes();
    }, [search, dietType]);

    return (
        <div className="recipe-app">
            <h2 className="recipe-app__title">Search recipes</h2>
            <input
                type="text"
                placeholder="ingridient or bludo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="recipe-app__search"
            />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default RecipesPage;
