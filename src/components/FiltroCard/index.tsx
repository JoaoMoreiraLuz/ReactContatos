import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { alteraFiltro } from '../../store/reducers/filtro'

export type Props = {
  legenda: string
  criterio: 'todos' | 'classe'
  valor?: enums.Classe
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const VerificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'classe') {
      return contatos.itens.filter((item) => item.classe === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = VerificaEstaAtivo()

  return (
    <S.Card parametro="classe" classe={valor} ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
