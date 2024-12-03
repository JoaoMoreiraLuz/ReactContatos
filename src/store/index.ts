import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/Contato'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatoReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
