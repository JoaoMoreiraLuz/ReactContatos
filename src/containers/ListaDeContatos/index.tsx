import { useSelector } from 'react-redux'
import Contato from '../../components/contato'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'classe') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.classe === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrada(s) como: "Todas" ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contato = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contato.length)

  return (
    <main>
      <S.paragraph>{mensagem}</S.paragraph>
      <ul>
        {contato.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              classe={c.classe}
              email={c.email}
              imagem={c.imagem}
              nome={c.nome}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ListaDeContatos
