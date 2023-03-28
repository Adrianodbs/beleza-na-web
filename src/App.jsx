import Header from './components/Header'
import './app.css'
import { ProdutoProvider } from './context/ProdutoContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sacola from './pages/Sacola'
import Pagamento from './pages/Pagamento'
import Confirmacao from './pages/Confirmacao'

function App() {
  return (
    <div className="app">
      <ProdutoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Sacola />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
          </Routes>
        </BrowserRouter>
      </ProdutoProvider>
    </div>
  )
}

export default App
