import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'
import * as enums from '../../utils/enums/contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Leo',
      telefone: '(34) 3333-3333',
      email: 'Leo@nardo.com',
      imagem:
        'https://preview.redd.it/is-there-a-sniper-default-pfp-that-someone-made-v0-78az45pd9f6c1.jpg?width=396&format=pjpg&auto=webp&s=5be4618605b25e0546d72dff52a7b897c3d4e1d4',
      classe: enums.Classe.TRABALHO
    },
    {
      id: 2,
      nome: 'P',
      telefone: '(34) 3233-3333',
      email: 'P@lo.com',
      imagem:
        'https://cdn.discordapp.com/attachments/1289665211858681891/1313321716105216022/FGHKYeGXsAY1WcM.png?ex=674fb5a9&is=674e6429&hm=cbda1941c99634d41ff5987ef014d54e5a1c958d04e274fe92b812a0c0df51e8&',
      classe: enums.Classe.AMIGO
    },
    {
      id: 3,
      nome: 'Zi',
      telefone: '(34) 1111-1111',
      email: 'Zi@b.com',
      imagem:
        'https://cdn.discordapp.com/attachments/1015076668475441222/1313554353973493831/ShowYourCalmCalmDownCalmDown.png?ex=67508e52&is=674f3cd2&hm=448bf603fa2f78ac67bb8e741d1ea5bf0369540fed4bc823459597ec6fed2a1b&',
      classe: enums.Classe.FAMILIA
    },
    {
      id: 4,
      nome: 'Z',
      telefone: '(34) 4444-4444',
      email: 'Zi@Zi.com',
      imagem:
        'https://cdn.discordapp.com/attachments/1022593963875631104/1313521205260718181/IMG_0740.jpg?ex=67506f73&is=674f1df3&hm=f3975f5a7da78174028d779a7b6076a4b10849552de6ee73fcd087811e8ad587&',
      classe: enums.Classe.FAMILIA
    }
  ]
}

const contatoSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const IndexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (IndexDoContato >= 0) {
        state.itens[IndexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const EmailExiste = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      if (EmailExiste) {
        alert('Já existe um contato com esse email/telefone')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
