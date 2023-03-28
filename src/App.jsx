import Header from './components/Header'
import './app.css'
import { ProdutoContext, ProdutoProvider } from './context/ProdutoContext'
import { useContext } from 'react'

function App() {
  const { menu } = useContext(ProdutoContext)
  console.log(menu)
  return (
    <div className="app">
      <ProdutoProvider>
        <Header />
      </ProdutoProvider>
    </div>
  )
}

export default App
