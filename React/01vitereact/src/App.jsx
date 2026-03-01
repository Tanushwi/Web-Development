import Chai from './chai.jsx'

function App() {
  const username="Tanushwi"
  return (
    <>
    <Chai/>
    <h1>Chai aur react with vite | Tanushwi Singh</h1>
    
    {/* in curly brackets only evaluated expression can be written - final output agr if vgera kuch b krna h normal kroo {} k andr nhi */}

    <p>Done by {username}</p>  
    </>
  )
}

export default App
