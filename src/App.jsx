
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
              <section>
                      <Recipes allRecipes={allRecipes}></Recipes>
              </section>
        </main>
        <footer>

        </footer>
    </>
  )
}

export default App
