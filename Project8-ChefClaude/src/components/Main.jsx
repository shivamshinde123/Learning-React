import { useState } from "react"

export function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientsList = ingredients.map(
        (ingredient) => (
            <li key={ingredient}>{ingredient}</li>
        )
    )

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
            <form className="flex flex-col gap-4 mt-10 justify-center items-center md:flex-row md:p-4 md:mt-7" action={handleAddIngredient}>
                <input aria-label="Add Ingredient" type="text" name="ingredient" placeholder="e.g., oregano" className="md:w-lg sm:w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white placeholder:text-gray-500" />
                <button type="submit" className="bg-black text-white px-10 py-2 ml-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black md:w-2xs sm:w-3xs cursor-pointer">+ Add Ingredient</button>
            </form>
            <h2 className="text-3xl text-center font-fold mt-10"></h2>
            <section>
                {ingredients.length > 0 &&
                    <div>
                        <h2 className="text-3xl font-bold text-center">Ingredients on hand:</h2>
                        <ul className="flex flex-col gap-4 mt-10 justify-start items-center list-disc mb-7">
                            {ingredientsList}
                        </ul>
                    </div>
                }
                {ingredients.length >= 5 &&
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 rounded-lg p-7 bg-[#F0EFEB] md:w-lg sm:w-md w-sm m-auto">
                        <div>
                            <h3 className="mb-2 text-lg font-bold md:text-left text-center">Ready for a receipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button className="p-3 rounded-lg bg-[#D17557] hover:bg-white hover:text-[#D17557] cursor-pointer" onClick={toggleShowRecipe}>Get a receipt</button>
                    </div>
                }
            </section>
            <section>
                {recipeShown && <h1>Recipe Shown here!</h1>}
            </section>
        </main>
    )
}

