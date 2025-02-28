

const CurrentlyCooking = ({recipe, idx}) => {
    const {recipe_name, preparing_time, calories} = recipe;
    return (
        <tr>
            <td>{idx+1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} min</td>
            <td>{calories} calories</td>
        </tr>
    );
};

export default CurrentlyCooking;