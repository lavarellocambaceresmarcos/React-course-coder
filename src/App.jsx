// importo el componente --> los componentes siempre empiezan con mayúscula
import Navbar from "./components/Navbar/Navbar"
import Cards from "./components/Cards/Cards"
import LoginButton from "./components/LoginButton/LoginButton"

function App() {
  
  return (
    <>
      {/* Invoco el componente "Navbar" */}
      <Navbar/>

      {/* Invoco cards */}
      <Cards/>
      
    </>
      
  )
}

export default App
