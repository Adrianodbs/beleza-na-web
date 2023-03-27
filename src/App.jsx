import Header from './components/Header'
import './app.css'
import Sacola from './pages/Sacola'
import Pagamento from './pages/Pagamento'
import { ProdutoProvider } from './context/ProdutoContext'

function App() {
  return (
    <div className="app">
      <ProdutoProvider>
        <Header />
        <Sacola />
      </ProdutoProvider>
    </div>
  )
}

export default App
