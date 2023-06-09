import { useContext } from 'react'
import './style.css'
import { ProdutoContext } from '../../context/ProdutoContext'
import Resumo from '../../components/Resumo'

function Confirmacao() {
  const { produto, setMenu, cartao, nome, validade } =
    useContext(ProdutoContext)
  return (
    <div className="confirmacao">
      <div className="container">
        <h3>Compra efetuada com sucesso</h3>
        <span>{cartao}</span>
        <span>{nome}</span>
        <span>{validade}</span>
      </div>
      <div className="confirmacao__produtos">
        <h4>Produtos</h4>
        {produto.items?.map(i => (
          <div key={i.product.priceSpecification.sku} className="produto">
            <img src={i.product.imageObjects[0].small} alt={i.product.name} />
            <h5>{i.product.name}</h5>
          </div>
        ))}
      </div>
      <Resumo onClick={() => setMenu(1)} link="/" children="Voltar ao inicio" />
    </div>
  )
}

export default Confirmacao
