import InputIngredient from './_Ingredient';

const MainContent = () => {
    return (
        <div className="bg-gray-100 pt-10 px-6 container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Hello from MainContent
            </h1>

            <InputIngredient />

        </div>
    );
};


export default MainContent;
