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
            <h4>R$ {item.product.priceSpecification.price.toFixed(2)}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sacola
