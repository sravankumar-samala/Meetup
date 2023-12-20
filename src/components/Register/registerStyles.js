import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  padding: 1em;
  min-height: 100vh;
`

export const RegisterContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: min(100%, 600px);
`
export const RegisterFormContainer = styled.div`
  display: grid;
  align-items: center;
`
export const RegisterForm = styled.form`
  display: grid;

  h1 {
    color: #334155;
    font-size: clamp(1.7rem, 2.5vw, 3rem);
  }
  input {
    border: 1px solid #cbd5e1;
    margin-block-end: 1em;
  }
  select {
    margin-block-end: 1em;
    padding: 0.5em;
    outline: none;
    border-radius: 5px;
    border: 1px solid #cbd5e1;
    background-color: transparent;
    font-size: 1rem;
  }
  label {
    margin-block: 1em 0.5em;
    color: #7b8794;
    font-weight: bold;
    text-transform: uppercase;
    font-size: clamp(1rem, 1vw, 1.5rem);
  }
`
export const RegisterNowBtn = styled.button`
  background-color: #3b82f6;
  margin-block-start: 1em;
  justify-self: start;
  padding: 0.5em 1.1em;
  color: white;
  font-weight: 600;
`
export const ErrorTxt = styled.p`
  color: #ff0b37;
  margin-block: 5px;
`
