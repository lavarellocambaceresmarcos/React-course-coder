// importo el componente --> los componentes siempre empiezan con mayúscula
import Navbar from "./components/Navbar/Navbar"
import Cards from "./components/Cards/Cards"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  
  return (
    <>
      {/* Invoco el componente "Navbar" */}
      <Navbar/>

      {/* invoco ItemListContainer */}
      <ItemListContainer Greeting={'Bienvenidos'}/>

      {/* Invoco cards */}
      <Cards/>

      
      
    </>
      
  )
}

export default App
