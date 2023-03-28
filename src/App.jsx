import Header from './components/Header'
import './app.css'

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
