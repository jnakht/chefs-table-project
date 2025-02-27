
import './App.css'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import OurRecipes from './Components/OurRecipes/OurRecipes'

function App() {
 

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
        </main>
        <footer>

        </footer>
    </>
  )
}

export default App
