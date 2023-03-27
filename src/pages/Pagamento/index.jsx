import './style.css'

function Pagamento() {
  return (
    <div className="pagamento">
      <div className="container">
        <h1>Cartão de crédito</h1>
        <form>
          <label>Número</label>
          <input type="text" />
          <label>Nome do titular do cartão</label>
          <input type="text" />
          <div>
            <label>Data de validade</label>
            <input type="text" />
            <label>Código CVV</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Pagamento
