

const WantToCookTable = ({recipe, idx, handlePreparing}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = recipe;
    
    return (
        <tr className="">
            <td className="px-1 lg:px-2 py-4">{idx+1}</td>
            <td className="px-1 lg:px-2 py-4">{recipe_name}</td>
            <td className="px-1 lg:px-2 py-4">{preparing_time} min</td>
            <td className="px-1 lg:px-2 py-4">{calories} calories</td>
            <td className="px-1 lg:px-2 py-4"><button className="bg-[#0BE58A] rounded-[50px] text-[#150B2B] font-lexend text-base font-medium pt-1 lg:pt-2 pb-1 lg:pb-2 pl-1 lg:pl-2 pr-1 lg:pr-2 btn hover:bg-slate-500" onClick={() => handlePreparing(recipe)}>Preparing</button></td>
        </tr>
    );
};

export default WantToCookTable;