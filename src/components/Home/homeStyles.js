import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  place-items: center;
  padding: 1em;
  min-height: 100vh;
`

export const HomeContentContainer = styled.div`
  color: white;
  display: grid;
  gap: 1em;
  place-items: center;
  width: min(100%, 500px);
`
export const HomeHeading = styled.h1`
  color: #334155;
  margin: 0;
  font-size: clamp(1.5rem, 2.5vw, 3rem);
`
export const HomeParagraph = styled.p`
  color: #334155;
  font-size: clamp(1.1rem, 1.6vw, 2rem);
`
export const HomeRegisterBtn = styled.button`
  background-color: #3b82f6;
  border-radius: 7px;
  padding: 0.7em 1.1em;
  font-weight: 600;
  color: white;
  margin-bottom: 2em;
`
export const RegisteredHeading = styled.h1`
  font-size: clamp(1.7rem, 2vw, 2.3rem);
  color: #2863eb;
  margin-block: 0;
`
export const RegisteredTxt = styled.p`
  color: #334155;
  font-size: clamp(1.5rem, 1.7vw, 2.1rem);
  margin-block: 10px 1em;
  font-weight: bold;
`
