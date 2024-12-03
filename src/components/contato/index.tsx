import { useDispatch } from 'react-redux'

import ContatoClass from '../../models/contato'
import * as S from './styles'
import { Mail, Phone, Trash2, Save, SquarePen, PenOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { editar, remover } from '../../store/reducers/Contato'
import { InfoContato } from '../../styles'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  telefone: telefoneOriginal,
  nome,
  classe,
  imagem,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card parametro="classe" classe={classe}>
      <S.Imagem src={imagem} parametro="classe" classe={classe} />
      <label htmlFor={nome}>
        <S.Infos>
          <S.Nome>
            {estaEditando && <em>Editando: </em>} {nome}
          </S.Nome>
          <S.Classe>{classe}</S.Classe>
          <S.FormaDeContatos>
            <Mail size={36} />
            <InfoContato
              disabled={!estaEditando}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Phone size={36} />
            <InfoContato
              disabled={!estaEditando}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </S.FormaDeContatos>
        </S.Infos>
      </label>
      <S.BannerColor parametro="classe" classe={classe} />
      <S.DivBotao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    classe,
                    telefone,
                    imagem,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              <Save />
            </S.BotaoSalvar>
            <S.BotaoExcluir
              onClick={() => {
                cancelarEdicao()
              }}
            >
              <PenOff />
            </S.BotaoExcluir>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              <SquarePen />
            </S.BotaoEditar>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))}>
              <Trash2 />
            </S.BotaoExcluir>
          </>
        )}
      </S.DivBotao>
    </S.Card>
  )
}

export default Contato
