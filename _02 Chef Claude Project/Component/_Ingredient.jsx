import { useState } from 'react';
import GetRecipiant from './_GetRecipiant';

export default () => {
    const [value, setValue] = useState('');
    const [Ingredient, setIngredient] = useState(['haha']);

    const handleAddIngredient = (e) => {
        e.preventDefault();
        if(value.length) setIngredient([...Ingredient, value]);
        setValue('');
    }

    const ShowIngredient = Ingredient.map((item, index) => (
        <li className="text-black-500" key={index}>{item}</li>
    ))

    return (
        <>
            <div className='items-center mx-auto'>
                <form className="flex ">
                    <input value={value} type="text" placeholder="e.g. Tomato, Onion, Orange"  
                        onChange={(e) => setValue(e.target.value)}
                        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"/>
                    
                    <button onClick={handleAddIngredient}
                        className="ms-2 bg-blue-500 text-white py-3 px-4 font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        + Add Ingredient
                    </button>
                </form>

                <ul className="mt-6 space-y-2 mx-auto list-disc pl-6 text-xl justify-center">
                    {Ingredient.length === 0 ? (
                        <p className="ms-0 ps-0 text-black-600">No Ingredients Available!</p>   
                    ) : (
                        <>
                            <p className="ms-0 ps-0 text-black-700 font-semibold">{Ingredient.length} Ingredients on Hands:</p>
                            <div className="ms-5 space-y-2">
                                {ShowIngredient}
                            </div>
                        </>
                    )}
                </ul>

                {Ingredient.length ? <GetRecipiant /> : ''}
            </div>

        </>
    )
}
