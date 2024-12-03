import BarraLateral from '../../containers/BarraLateral'
import BarraPesquisa from '../../containers/BarraPesquisa'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { Container, MainContainer } from '../../styles'

const Home = () => (
  <>
    <Container>
      <BarraLateral />
      <MainContainer>
        <BarraPesquisa mostrarInputPesquisa />
        <ListaDeContatos />
      </MainContainer>
    </Container>
  </>
)

export default Home
