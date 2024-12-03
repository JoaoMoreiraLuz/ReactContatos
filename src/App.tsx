import { createBrowserRouter, RouterProvider } from 'react-router'
import GlobalStyle from './styles'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/form'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
