import SearchBar from "./SearchBar"
import IngredientList from "./IngredientList"
import React from 'react'

export default function MainContent() {
    const [ingredients, setIngredients] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")
    const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    function handleSubmit(event) {
        event.preventDefault()
        if (inputValue.trim() === "") return
        setIngredients(prevIngredientList => [...prevIngredientList, inputValue])
        setInputValue("")
    }
    return (
        <>
            <form onSubmit={handleSubmit} id="add-ingredient-form" className="p-20 flex justify-center space-x-3 h-full max-w-full">
                <input type="text" 
                       placeholder="e.g. oregano" 
                       id="ingredient-textbox" 
                       className="border bg-white border-gray-300 rounded-md text-sm py-1 pl-2 w-128" 
                       name="ingredient"
                       value = {inputValue}
                       onChange={(e) => setInputValue(e.target.value)}>
    
                </input>
                <button id='add-ingredient-button' 
                        className="bg-black text-white px-6 rounded-md before:content-['+'] before:mr-2 text-sm"
                        >Add Ingredient</button>
            </form>
            <ul id="ingredient-list" className="list list-disc">
                {ingredientsListItems}
            </ul>
        </>
    )
}