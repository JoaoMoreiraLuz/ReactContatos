import * as enums from '../utils/enums/contato'

class Contato {
  nome: string
  email: string
  classe: enums.Classe
  telefone: string
  imagem: string
  id: number

  constructor(
    nome: string,
    email: string,
    classe: enums.Classe,
    telefone: string,
    imagem: string,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.classe = classe
    this.telefone = telefone
    this.imagem = imagem
    this.id = id
  }
}

export default Contato
