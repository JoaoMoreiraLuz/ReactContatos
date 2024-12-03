import { styled } from 'styled-components'

type Props = {
  mostrarFiltros: boolean
}

export const Logo = styled.h1`
  justify-items: center;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 2px solid #000;
`

export const Aside = styled.aside<Props>`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  visibility: ${(props) => (!props.mostrarFiltros ? 'visible' : 'hidden')};
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
