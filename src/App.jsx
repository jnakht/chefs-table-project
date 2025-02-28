
import './App.css'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import OurRecipes from './Components/OurRecipes/OurRecipes'
import { useEffect, useState } from 'react'
import Recipes from './Recipes/Recipes/Recipes'

function App() {


    const [allRecipes, setAllRecipes] = useState([]);
    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setAllRecipes(data))
    } ,[])

    const [wantToCooks, setWantToCooks] = useState([]);
    const handleWantToCook = (wantToCook) => {
      const newList = [...wantToCooks, wantToCook];
      setWantToCooks(newList);
    }

    const [currentlyCookings, setCurrentlyCookings] = useState([]);
    const handlePreparing = (currentlyCooking) => {
      const newList = [...currentlyCookings, currentlyCooking];
      setCurrentlyCookings(newList);
      console.log('clicked')

      // remove it from the wantToCooks
      const newWantToCooks = [];
        wantToCooks.map(recipe => {
        console.log("this is the recipe to remove: ", recipe);
        console.log(recipe.recipe_id, currentlyCooking.recipe_id);
        if (recipe.recipe_id !== currentlyCooking.recipe_id) {
          newWantToCooks.push(recipe);
        }
      });
      setWantToCooks(newWantToCooks);
      console.log('new want to cooks : ', newWantToCooks);
    }
  return (
    <>
        
        <header className='w-[90vw] lg:w-[80%] mx-auto font-lexend mt-8'>
            <Navbar></Navbar>
            <Banner></Banner>
        </header>
        <main>
              {/* our recipes section */}
              <section className='w-[90vw] lg:w-[80%] mx-auto font-lexend mt-8'>
                    <OurRecipes></OurRecipes>
              </section>
              {/* dynamic section */}
              <section className='w-[90vw] lg:w-[80%] mx-auto mb-[100px]'>
                      <Recipes allRecipes={allRecipes} handleWantToCook={handleWantToCook} wantToCooks={wantToCooks} handlePreparing={handlePreparing} currentlyCookings={currentlyCookings}></Recipes>
              </section>
        </main>
        <footer>

        </footer>
    </>
  )
}

export default App
