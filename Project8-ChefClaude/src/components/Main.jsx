import { useState } from "react"



export function Main() {

    const [ingredients, setIngredients] = useState([])

    const ingredientsList = ingredients.map(
        (ingredient) => (
            <li key={ingredient}>{ingredient}</li>
        )
    )

    const handleAddIngredient = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('ingredient')
        
        setIngredients((ingredients) => {
            return [...ingredients, newIngredient]
        })
    }


    return (
        <main>
            <form className="flex flex-col gap-4 mt-10 justify-center items-center md:flex-row md:p-4 md:mt-7" onSubmit={handleAddIngredient}>
                <input aria-label="Add Ingredient" type="text" name="ingredient" placeholder="e.g., oregano" className="w-lg p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white placeholder:text-gray-500" />
                <button type="submit" className="bg-black text-white px-10 py-2 ml-2 rounded-md hover:bg-[#141413] w-2xs cursor-pointer">+ Add Ingredient</button>
            </form>
            <ul className="flex flex-col gap-4 mt-10 justify-start items-center list-disc">
                {ingredientsList}
            </ul>
        </main>
    )
}