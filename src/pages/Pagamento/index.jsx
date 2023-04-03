import { useContext } from 'react'
import Resumo from '../../components/Resumo'
import { ProdutoContext } from '../../context/ProdutoContext'
import './style.css'

function Pagamento() {
  const { setMenu, cartao, setCartao, nome, setNome, validade, setValidade } =
    useContext(ProdutoContext)

  function handleData(e) {
    e.preventDefault()
  }

  return (
    <div className="pagamento">
      <div className="container">
        <h3>Cartão de crédito</h3>
        <form onSubmit={handleData}>
          <label>Número</label>
          <input
            required
            type="text"
            placeholder="0000 0000 0000 0000"
            value={cartao}
            onChange={e => setCartao(e.target.value)}
          />
          <label>Nome do titular do cartão</label>
          <input
            required
            type="text"
            placeholder="Nome impresso no cartão"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <div className="data-validade">
            <label>
              Data de validade{' '}
              <input
                required
                type="text"
                placeholder="MM/AAAA"
                value={validade}
                onChange={e => setValidade(e.target.value)}
              />
            </label>
            <label>
              Código CVV <input required type="text" placeholder="000" />
            </label>
          </div>
        </form>
      </div>
      <Resumo
        onClick={() => setMenu(3)}
        link="/confirmacao"
        children="Finalizar pedido"
      />
    </div>
  )
}

export default Pagamento
