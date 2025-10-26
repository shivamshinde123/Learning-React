


const AddIngredientForm = (props) => {

    return (
        <form className="flex flex-col gap-4 mt-10 justify-center items-center md:flex-row md:p-4 md:mt-7" action={props.handleAddIngredient}>
            <input aria-label="Add Ingredient" type="text" name="ingredient" placeholder="e.g., oregano" className="md:w-lg sm:w-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white placeholder:text-gray-500" />
            <button type="submit" className="bg-black text-white px-10 py-2 ml-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black md:w-2xs sm:w-3xs cursor-pointer">+ Add Ingredient</button>
        </form>
    )
}

export default AddIngredientForm;