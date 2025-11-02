import { useState, useRef, useEffect } from "react"
import IngredientList from "./IngredientList.jsx"
import RecipeList from './RecipeList.jsx'
import AddIngredientForm from "./AddIngredientForm.jsx"
import getRecipeFromMistral from "../../AI_code.js"

export default function Body() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const [recipe, setRecipe] = useState(null)
    const recipeSection = useRef(null)

    useEffect(() => { // scrolling to the get a recipe button whenever the recipe is loaded
        if (recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    const handleAddIngredient = (formData) => {
        const newIngredient = formData.get('ingredient')

        setIngredients((ingredients) => {
            if (newIngredient !== "") {
                return [...ingredients, newIngredient]
            }

            return ingredients

        })
    }

    async function getRecipe () {
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
        setRecipeShown(true)
        console.log(generatedRecipe)
    }

    return (
        <main>
            <AddIngredientForm handleAddIngredient={handleAddIngredient} />
            <IngredientList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection}/>
            {recipeShown && <RecipeList recipe={recipe}/>}
        </main>
    )
}

