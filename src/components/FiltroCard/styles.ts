import styled from 'styled-components'
import * as enums from '../../utils/enums/contato'

type TagProps = {
  ativo: boolean
  parametro?: 'classe'
  classe?: enums.Classe
}

function retornaBannerColor(props: TagProps): string {
  if (props.parametro === 'classe') {
    if (props.classe === enums.Classe.AMIGO) return '#34ace0'
    if (props.classe === enums.Classe.FAMILIA) return '#ffb142'
    if (props.classe === enums.Classe.TRABALHO) return '#706fd3'
  }

  return '#fd79a8'
}

export const Card = styled.div<TagProps>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? retornaBannerColor(props) : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? retornaBannerColor(props) : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`
