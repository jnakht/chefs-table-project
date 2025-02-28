import '../../index.css'

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    console.log(recipe)
    return (
        <div>
            <div className="card bg-base-100 lg:w-96 shadow-xl p-6">
                <figure className="w-full h-[200px] rounded-xl">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="" />
                </figure>
                {/* after image */}
                <div>
                    <h3 className="text-[#282828] text-xl font-semibold font-lexend mt-6 mb-4">{recipe_name}</h3>
                    <p className='text-[#878787] font-firaSans text-base font-normal'>{short_description}</p>
                    {/* ingredients div */}
                    <div className='border-t border-b border-[#E6E6E6] mt-4 mb-4 pt-4 pb-3'>
                        <h3 className='text-[#282828] font-lexend text-lg font-medium mb-4'>Ingredients: {ingredients.length}</h3>
                        <ul className='text-[#878787] font-firaSans text-lg font-normal ml-8 list-disc '>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    {/*  last div*/}
                    <div>
                        <div className='flex gap-4 text-[#878787] font-firaSans text-lg font-normal mb-6'>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_22_7)">
                                        <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 12H15.5" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 7V12" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_22_7">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {preparing_time} min
                            </div>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_34_2)">
                                        <path d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z" stroke="#282828" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_2">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {calories} calories
                            </div>
                        </div>
                        <button onClick={(e) => {
                            handleWantToCook(recipe);
                            e.target.disabled = true;
                        }} className='btn bg-[#0BE58A] hover:bg-slate-500 pl-3 pr-3 pt-3 pb-3 h-[56px] rounded-[50px] w-[170px] text-lg font-medium disabled:bg-black disabled:text-white'>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;