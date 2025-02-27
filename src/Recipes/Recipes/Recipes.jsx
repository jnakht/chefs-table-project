import Recipe from "../Recipe/Recipe";


const Recipes = ({allRecipes}) => {
    console.log('all recipes type: ',typeof allRecipes)
    return (
        <div>
            {/* left part */}
            <div>
                {
                    allRecipes.map(recipe => <Recipe recipe={recipe}></Recipe>)
                }
            </div>
            {/* right part */}
            <div>

            </div>
        </div>
    );
};

export default Recipes;