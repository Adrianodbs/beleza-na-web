import Resumo from '../../components/Resumo'
import './style.css'

function Pagamento() {
  return (
    <div className="pagamento">
      <div className="container">
        <h3>Cartão de crédito</h3>
        <form>
          <label>Número</label>
          <input type="text" placeholder="0000 0000 0000 0000" />
          <label>Nome do titular do cartão</label>
          <input type="text" placeholder="Nome impresso no cartão" />
          <div className="data-validade">
            <label>
              Data de validade <input type="text" placeholder="MM/AA" />
            </label>
            <label>
              Código CVV <input type="text" placeholder="000" />
            </label>
          </div>
        </form>
      </div>
      <Resumo children="Finalizar pedido" />
    </div>
  )
}

export default Pagamento
