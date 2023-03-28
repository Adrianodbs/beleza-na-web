import React, { useContext } from 'react'
import { ProdutoContext } from '../../context/ProdutoContext'
import './style.css'

import Sacola from '../../pages/Sacola'
import Pagamento from '../../pages/Pagamento'
import Confirmacao from '../../pages/Confirmacao'

function Header() {
  const { menu, setMenu } = useContext(ProdutoContext)
  return (
    <>
      <ul className="header">
        <li
          onClick={() => setMenu(1)}
          className={`${menu === 1 ? 'active' : ''}`}
        >
          Sacola
        </li>
        <li
          onClick={() => setMenu(2)}
          className={`${menu === 2 ? 'active' : ''}`}
        >
          Pagamento
        </li>
        <li
          onClick={() => setMenu(3)}
          className={`${menu === 3 ? 'active' : ''}`}
        >
          Confirmação
        </li>
      </ul>
      <div>
        {menu === 1 && <Sacola />}
        {menu === 2 && <Pagamento />}
        {menu === 3 && <Confirmacao />}
      </div>
    </>
  )
}

export default Header
