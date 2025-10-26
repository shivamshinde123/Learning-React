import { useState } from "react"
import IngredientList from "./IngredientList.jsx"
import RecipeList from './RecipeList.jsx'
import AddIngredientForm from "./AddIngredientForm.jsx"

export function Body() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    const handleAddIngredient = (formData) => {
        const newIngredient = formData.get('ingredient')

        setIngredients((ingredients) => {
            if (newIngredient !== "") {
                return [...ingredients, newIngredient]
            }

            return ingredients

        })
    }

    const toggleShowRecipe = () => {
        setRecipeShown((prev) => {
            return !prev
        })
    }

    return (
        <main>
            <AddIngredientForm handleAddIngredient={handleAddIngredient} />
            <IngredientList ingredients={ingredients} toggleShowRecipe={toggleShowRecipe} />
            {recipeShown && <RecipeList recipeShown={recipeShown} />}
        </main>
    )
}

