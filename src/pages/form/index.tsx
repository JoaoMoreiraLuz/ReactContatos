import BarraPesquisa from '../../containers/BarraPesquisa'
import Formulario from '../../containers/Formlulario'
import { MainContainerForm } from '../../styles'

const Cadastro = () => (
  <>
    <BarraPesquisa mostrarInputPesquisa={false} />
    <MainContainerForm>
      <Formulario />
    </MainContainerForm>
  </>
)

export default Cadastro
