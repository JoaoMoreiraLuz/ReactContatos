import { styled } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 547px;
  width: 100%;
  font-weight: 14px;
  color: #666666;
  align-items: center;

  input {
    resize: none;
    margin: 16px 0;
    border-bottom: 2px solid #000;
  }
`

export const NovaTarefa = styled.h1`
  justify-items: center;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 2px solid #000;
  margin-bottom: 30px;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  align-items: center;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  margin-right: 10px;
  text-transform: capitalize;
`
