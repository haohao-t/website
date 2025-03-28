import { useState, useEffect } from "react";

interface Recipe {
    id: number; 
    title: string; 
    image: string; 
}

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const addToFavorites = (recipe: Recipe) => {
        const updatedFavorites = [...favorites, recipe];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const removeFromFavorites = (id: number) => {
        const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return { favorites, addToFavorites, removeFromFavorites };
};
