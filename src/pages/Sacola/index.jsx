import { useContext } from 'react'
import './style.css'
import { ProdutoContext } from '../../context/ProdutoContext'
import Resumo from '../../components/Resumo'

function Sacola() {
  const { produto, setMenu } = useContext(ProdutoContext)

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
      <Resumo
        onClick={() => setMenu(2)}
        link="/pagamento"
        children="Seguir para o pagamento"
      />
    </div>
  )
}

export default Sacola
