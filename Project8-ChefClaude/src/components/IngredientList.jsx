

const IngredientList = (props) => {

    const ingredientsList = props.ingredients.map(
        (ingredient) => (
            <li key={ingredient}>{ingredient}</li>
        )
    )

    return (
        <section>
            {props.ingredients.length > 0 &&
                <div>
                    <h2 className="text-3xl font-bold text-center">Ingredients on hand:</h2>
                    <ul className="flex flex-col gap-4 mt-10 justify-start items-center list-disc mb-7">
                        {ingredientsList}
                    </ul>
                </div>
            }

            {props.ingredients.length >= 5 &&
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 rounded-lg p-7 bg-[#F0EFEB] md:w-lg sm:w-md w-sm m-auto" ref={props.ref}>
                    <div>
                        <h3 className="mb-2 text-lg font-bold md:text-left text-center">Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button className="p-3 rounded-lg bg-[#D17557] hover:bg-white hover:text-[#D17557] cursor-pointer" onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}

export default IngredientList;