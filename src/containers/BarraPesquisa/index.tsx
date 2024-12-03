import * as S from './styles'
import { Botao } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarInputPesquisa: boolean
}

const BarraPesquisa = ({ mostrarInputPesquisa }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      {mostrarInputPesquisa ? (
        <>
          <S.BarraPesquisa
            type="text"
            placeholder="Buscar por nome"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
          />
          <Botao onClick={() => navigate('/novo')}>Novo Contato</Botao>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de contatos</Botao>
      )}
    </S.Header>
  )
}

export default BarraPesquisa
