import { useContext } from 'react'
import './style.css'
import { ProdutoContext } from '../../context/ProdutoContext'

function Sacola() {
  const { produto, setProduto } = useContext(ProdutoContext)

  return (
    <div className="sacola">
      <div className="container">
        {produto.items?.map(i => (
          <div key={i.product.priceSpecification.sku} className="produto">
            <img src={i.product.imageObjects[0].small} alt={i.product.name} />
            <h3>{i.product.name}</h3>
            <div className="precos">
              <h4>R$ {i.product.priceSpecification.price.toFixed(2)}</h4>
            </div>
          </div>
        ))}
      </div>
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
        <button>Seguir para o pagamento</button>
      </div>
    </div>
  )
}

export default Sacola
