import { useContext } from 'react'
import { ProdutoContext } from '../../context/ProdutoContext'
import './style.css'
import { Link } from 'react-router-dom'

function Resumo({ children, link, onClick }) {
  const { produto } = useContext(ProdutoContext)
  return (
    <div className="resumo">
      <div>
        <p>Produtos: (3 itens)</p>
        <p>R$ {produto.subTotal?.toFixed(2)}</p>
      </div>
      <div>
        <p>Frete:</p>
        <p>R$ {produto.shippingTotal?.toFixed(2)}</p>
      </div>
      <div>
        <p>Desconto:</p>
        <h4>R$ {produto.discount?.toFixed(2)}</h4>
      </div>
      <div>
        <h3>Subtotal</h3>
        <h3>R$ {produto.total?.toFixed(2)}</h3>
      </div>
      <Link to={link}>
        <button onClick={onClick}>{children}</button>
      </Link>
    </div>
  )
}

export default Resumo
