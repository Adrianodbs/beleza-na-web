import { useContext, useState } from 'react'
import Resumo from '../../components/Resumo'
import { ProdutoContext } from '../../context/ProdutoContext'
import './style.css'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'

function Pagamento() {
  const {
    setMenu,
    cartao,
    setCartao,
    nome,
    setNome,
    validade,
    setValidade,
    CVV,
    setCVV
  } = useContext(ProdutoContext)

  const navigate = useNavigate()

  function handleData(e) {
    e.preventDefault()
    const dateFormat = 'MM/YYYY'

    if (
      cartao.length === 16 &&
      nome !== '' &&
      validade !== '' &&
      CVV.length === 3
    ) {
      navigate('/confirmacao')
      setMenu(3)
    } else if (cartao.length !== 16) {
      alert('O cartão precisa ter 16 números')
    } else if (nome === '') {
      alert('É necessário preencher os dados do nome')
    } else if (!moment(validade, dateFormat, true).isValid()) {
      alert(
        'A data de validade do cartão mão foi preenchida, ou está incorreta'
      )
    } else if (CVV.length !== 3) {
      alert('O CVV precisa ter 3 números')
    }
  }

  return (
    <div className="pagamento">
      <div className="container">
        <h3>Cartão de crédito</h3>
        <form>
          <label>Número</label>
          <input
            required
            minLength={16}
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
              Código CVV{' '}
              <input
                required
                type="text"
                placeholder="000"
                value={CVV}
                onChange={e => setCVV(e.target.value)}
              />
            </label>
          </div>
        </form>
      </div>

      <Resumo children="Finalizar pedido" onClick={handleData} type="submit" />
    </div>
  )
}

export default Pagamento
