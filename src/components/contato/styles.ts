import { styled } from 'styled-components'

import * as enums from '../../utils/enums/contato'

type TagProps = {
  parametro: 'classe'
  classe: enums.Classe
}

function retornaBannerColor(props: TagProps): string {
  if (props.parametro === 'classe') {
    if (props.classe === enums.Classe.AMIGO) return '#34ace0'
    if (props.classe === enums.Classe.FAMILIA) return '#ffb142'
    if (props.classe === enums.Classe.TRABALHO) return '#706fd3'
  }

  return '#ccc'
}

export const Card = styled.div<TagProps>`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
  padding: 16px 0px 16px 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 0.7fr 2.2fr 1fr;
  border-top: 1px solid #ccc;
  border-bottom: 2px solid ${(props) => retornaBannerColor(props)};
  border-right: 2px solid ${(props) => retornaBannerColor(props)};

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Infos = styled.div`
  flex-direction: column;
`

export const Nome = styled.h3`
  font-size: 24px;
  font-weight: 700;
`

// export const Nome = styled.input`
//   font-size: 24px;
//   font-weight: 700;
//   resize: none;
//   border: none;
//   background-color: transparent;
// `

export const Classe = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-left: 12px;
`

// export const Classe = styled.input`
//   font-size: 12px;
//   font-weight: 400;
//   margin-bottom: 12px;
//   margin-left: 12px;
//   resize: none;
//   border: none;
//   background-color: transparent;
// `

export const FormaDeContatos = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  gap: 6px;

  p {
    font-size: 24px;
    font-weight: 400;
  }

  .lucide-phone,
  .lucide-mail {
    border-right: 1px solid #000;
    padding-right: 12px;
    margin-right: 12px;
  }
`

export const BannerColor = styled.div<TagProps>`
  margin-left: 50px;
  height: 200px;
  width: 400px;
  justify-content: center;
  border-radius: 150px 0 0 150px;
  background-color: ${(props) => retornaBannerColor(props)};
  overflow: hidden;
`

export const Imagem = styled.img<TagProps>`
  margin-top: 30px;
  justify-content: left;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 16px;
  border: 4px solid ${(props) => retornaBannerColor(props)};
`

export const BotaoExcluir = styled.button`
  padding: 8px 1px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #ff4757;
  border-radius: 8px;
  width: 50%;
`

export const BotaoSalvar = styled(BotaoExcluir)`
  background-color: #2ed573;
`

export const BotaoEditar = styled(BotaoExcluir)`
  background-color: #6d214f;
`

export const DivBotao = styled.div`
  display: flex;
  width: 160px;
  margin-left: 13px;
`
