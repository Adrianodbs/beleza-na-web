import { createContext, useState, useEffect } from 'react'
import apiData from '../services/api'

export const ProdutoContext = createContext({})

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState([])
  const [menu, setMenu] = useState(1)
  const [cartao, setCartao] = useState('')
  const [nome, setNome] = useState('')
  const [validade, setValidade] = useState('')
  const [CVV, setCVV] = useState('')

  useEffect(() => {
    apiData.get().then(response => {
      setProduto(response.data)
    })
  }, [])
  return (
    <ProdutoContext.Provider
      value={{
        produto,
        setProduto,
        menu,
        setMenu,
        cartao,
        setCartao,
        nome,
        setNome,
        validade,
        setValidade,
        CVV,
        setCVV
      }}
    >
      {children}
    </ProdutoContext.Provider>
  )
}
