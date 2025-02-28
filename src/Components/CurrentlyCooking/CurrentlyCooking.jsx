

const CurrentlyCooking = ({recipe, idx}) => {
    const {recipe_name, preparing_time, calories} = recipe;
    return (
        <tr>
            <td>{idx+1}</td>
            <td className="px-2 py-4">{recipe_name}</td>
            <td className="px-2 py-4">{preparing_time} min</td>
            <td className="px-2 py-4">{calories} calories</td>
        </tr>
    );
};

export default CurrentlyCooking;