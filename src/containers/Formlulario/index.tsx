import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import * as enums from '../../utils/enums/contato'
import { cadastrar } from '../../store/reducers/Contato'
import { InfoContato } from '../../styles'
import { Form, NovaTarefa, Opcao, Opcoes } from './styles'
import { BotaoSalvar } from '../../components/contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [classe, setClasse] = useState(enums.Classe.AMIGO)
  const [imagem, setImagem] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        classe,
        imagem
      })
    )
    navigate('/')
  }

  return (
    <>
      <NovaTarefa>Nova Tarefa</NovaTarefa>
      <Form onSubmit={cadastrarContato}>
        <InfoContato
          value={nome}
          required={true}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <InfoContato
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <InfoContato
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="text"
          placeholder="Telefone (opcional)"
        />
        <InfoContato
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          type="text"
          placeholder="URL da imagem (opcional)"
        />
        <p>Grupo Social</p>
        <Opcoes>
          {Object.values(enums.Classe).map((classe) => (
            <Opcao key={classe}>
              <input
                value={classe}
                name="classe"
                type="radio"
                onChange={(e) => setClasse(e.target.value as enums.Classe)}
                id={classe}
                defaultChecked={classe === enums.Classe.AMIGO}
              />{' '}
              <label htmlFor={classe}>{classe}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </>
  )
}

export default Formulario
