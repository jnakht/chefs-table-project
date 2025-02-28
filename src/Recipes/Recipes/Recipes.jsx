import CurrentlyCooking from "../../Components/CurrentlyCooking/CurrentlyCooking";
import WantToCookTable from "../../Components/WantToCookTable/WantToCookTable";
import Recipe from "../Recipe/Recipe";


const Recipes = ({allRecipes, handleWantToCook, wantToCooks, handlePreparing, currentlyCookings}) => {
    console.log('all recipes type: ',typeof allRecipes)
    return (
        <div className="flex">
            {/* left part */}
            <div className="grid grid-cols-2 gap-6">
                {
                    allRecipes.map(recipe => <Recipe recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
                }
            </div>
            {/* right part */}
            <div>
                    <div>
                        <h1>Want to cook: {wantToCooks.length}</h1>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                            {
                                wantToCooks.map((recipe, idx) => <WantToCookTable recipe={recipe} idx={idx} handlePreparing={handlePreparing}></WantToCookTable>)
                            }
                        </table>
                    </div>
                    <div>
                        <h1>Currently cooking: {currentlyCookings.length}</h1>
                    </div>
                    <div>
                        <table>
                             <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                
                            </tr>
                            {
                                 currentlyCookings.map((recipe, idx) => <CurrentlyCooking idx={idx} recipe={recipe}></CurrentlyCooking>)
                             }
                        </table>
                    </div>
                    <div></div>
            </div>
        </div>
    );
};

export default Recipes;