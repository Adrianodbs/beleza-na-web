import { useEffect, useState } from 'react'
import './style.css'
import apiData from '../../services/api'

function Sacola() {
  const [produto, setProduto] = useState()
  useEffect(() => {
    apiData.get().then(response => {
      setProduto(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className="sacola">
      <div className="container">
        {produto.items.map(item => (
          <div key={item.product.priceSpecification.sku} className="produto">
            <img
              src={item.product.imageObjects[0].small}
              alt={item.product.name}
            />
            <h3>{item.product.name}</h3>
            <div className="precos">
              <h4>R$ {item.product.priceSpecification.price.toFixed(2)}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="resumo">
        <div>
          <p>Produtos: (3 itens)</p>
          <p>R$ {produto.subTotal.toFixed(2)}</p>
        </div>
        <div>
          <p>Frete:</p>
          <p>R$ {produto.shippingTotal.toFixed(2)}</p>
        </div>
        <div>
          <p>Desconto:</p>
          <h4>R$ {produto.discount.toFixed(2)}</h4>
        </div>
        <div>
          <h3>Subtotal</h3>
          <h3>R$ {produto.total.toFixed(2)}</h3>
        </div>
        <button>Seguir para o pagamento</button>
      </div>
    </div>
  )
}

export default Sacola
