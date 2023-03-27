import { createContext, useState, useEffect } from 'react'
import apiData from '../services/api'

export const ProdutoContext = createContext({})

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState([])
  useEffect(() => {
    apiData.get().then(response => {
      setProduto(response.data)
    })
  }, [])
  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  )
}
