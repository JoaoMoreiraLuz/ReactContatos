import * as enums from '../../utils/enums/contato'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside mostrarFiltros={false}>
      <S.Logo>Meus Contatos</S.Logo>
      <S.Filtros>
        <FiltroCard
          valor={enums.Classe.AMIGO}
          criterio="classe"
          legenda="Amigos(as)"
        />
        <FiltroCard
          valor={enums.Classe.FAMILIA}
          criterio="classe"
          legenda="Familiares"
        />
        <FiltroCard
          valor={enums.Classe.TRABALHO}
          criterio="classe"
          legenda="Trabalho"
        />
        <FiltroCard criterio="todos" legenda="Todos" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
