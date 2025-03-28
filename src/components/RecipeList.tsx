import React from 'react';
import RecipeItem from './RecipeItem';
import '../styles/RecipeList.css';

interface Recipe {
    id: number;
    title: string;
    image: string;
}

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    if (!recipes.length) {
        return (
            <div className="recipe-list">
                <p className="recipe-list__empty">No recipes found</p>
            </div>
        );
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    recipe={recipe}
                />
            ))}
        </div>
    );
};

export default RecipeList;