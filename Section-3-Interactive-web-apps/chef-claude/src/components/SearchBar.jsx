export default function SearchBar() {
    return (
        <form onSubmit={submitForm} id="add-ingredient-form" className="p-20 flex justify-center space-x-3 h-full max-w-full">
            <input type="text" placeholder="e.g. oregano" id="ingredient-textbox" className="border bg-white border-gray-300 rounded-md text-sm py-1 pl-2 w-128" name="ingredient"></input>
            <button id='add-ingredient-button' className="bg-black text-white px-6 rounded-md before:content-['+'] before:mr-2 text-sm"
                        >Add Ingredient</button>
        </form>
    )
}