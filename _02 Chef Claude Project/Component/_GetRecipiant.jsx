import { useState } from "react";
import GetRecipeFromAI from "./_GetRecipeFromAI";

export default () => {
    const [recipeShow, setRecipeShow] = useState(false)
    
    function toggleRecipeShown () {
        setRecipeShow(!recipeShow)
    }

    return (
        <>
            <div className="flex justify-between items-center mx-auto my-8 p-6 border-2 border-gray-300 rounded-lg shadow-lg ">
                <div className="space-y-4">
                    <p className="text-lg font-semibold text-gray-700">Ready for a recipe?</p>
                    <p className="text-sm font-semibold text-gray-700"> Click the button to Genarate a Recipiant from your list of Ingredients. </p>
                </div>
                
                <button onClick={toggleRecipeShown} className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Get a Recipe
                </button>
            </div>
            {recipeShow ? < GetRecipeFromAI/> : null}
        </>

    );
};
