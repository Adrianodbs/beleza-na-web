import Header from './components/Header'
import './app.css'
import { ProdutoProvider } from './context/ProdutoContext'

function App() {
  return (
    <div className="app">
      <ProdutoProvider>
        <Header />
      </ProdutoProvider>
    </div>
  )
}

export default App
