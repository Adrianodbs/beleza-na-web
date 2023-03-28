import React, { useContext } from 'react'
import { ProdutoContext } from '../../context/ProdutoContext'
import './style.css'

import { Link } from 'react-router-dom'

function Header() {
  const { menu, setMenu } = useContext(ProdutoContext)
  return (
    <>
      <ul className="header">
        <Link to="/">
          <li
            onClick={() => setMenu(1)}
            className={`${menu === 1 ? 'active' : ''}`}
          >
            Sacola
          </li>
        </Link>

        <Link to="/pagamento">
          <li
            onClick={() => setMenu(2)}
            className={`${menu === 2 ? 'active' : ''}`}
          >
            Pagamento
          </li>
        </Link>

        <Link to="confirmacao">
          <li
            onClick={() => setMenu(3)}
            className={`${menu === 3 ? 'active' : ''}`}
          >
            Confirmação
          </li>
        </Link>
      </ul>
    </>
  )
}

export default Header
