import CurrentlyCooking from "../../Components/CurrentlyCooking/CurrentlyCooking";
import WantToCookTable from "../../Components/WantToCookTable/WantToCookTable";
import Recipe from "../Recipe/Recipe";
import '../../index.css'

const Recipes = ({allRecipes, handleWantToCook, wantToCooks, handlePreparing, currentlyCookings, totalTime, totalCalories}) => {
    console.log('all recipes type: ',typeof allRecipes)
    return (
        <div className="flex flex-col lg:flex-row gap-6 ">
            {/* left part */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    allRecipes.map(recipe => <Recipe recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
                }
            </div>
            {/* right part */}
            <div className="flex-1 border border-solid rounded-2xl border-[#28282833] pt-8 pb-8 max-h-max ">
                    <div>
                        <h1 className="text-[#282828] font-lexend text-2xl font-semibold text-center mb-2">Want to cook: {wantToCooks.length}</h1>
                        <hr className="w-[50%] mx-auto mb-6 border border-solid border-gray-500" />
                    </div>
                    <div>
                        <table className="text-[#878787] font-firaSans text-base font-medium table-auto ml-3 mr-3">
                            <thead>
                            <tr className="">
                                <th className=" py-4"></th>
                                <th className="px-2 py-4">Name</th>
                                <th className="px-2 py-4">Time</th>
                                <th className="px-2 py-4">Calories</th>
                                <th className=" py-4"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                wantToCooks.map((recipe, idx) => <WantToCookTable recipe={recipe} idx={idx} handlePreparing={handlePreparing}></WantToCookTable>)
                            }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1 className="text-[#282828] font-lexend text-2xl font-semibold text-center mb-2">Currently cooking: {currentlyCookings.length}</h1>
                        <hr className="w-[50%] mx-auto mb-6 border border-solid border-gray-500" />
                    </div>
                    <div>
                        <table className="text-[#878787] font-firaSans text-base font-medium table-fixed ml-3 mr-3">
                             <thead>
                                 <tr>
                                <th></th>
                                <th className="px-2 py-4">Name</th>
                                <th className="px-2 py-4">Time</th>
                                <th className="px-2 py-4">Calories</th>
                                
                                 </tr>
                             </thead>
                           <tbody>
                           {
                                 currentlyCookings.map((recipe, idx) => <CurrentlyCooking idx={idx} recipe={recipe}></CurrentlyCooking>)
                             }
                           </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end items-start gap-4 text-[#282828CC] font-lexend text-base font-semibold">
                        <div className="max-w-[120px]">
                            <h3>Total Time = 
                            {totalTime} minutes</h3>
                        </div>
                        <div className="max-w-[120px]">
                            <h3>Total Calories = 
                            {totalCalories} calories</h3>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Recipes;