import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.5rem;
  }

  h1 {
  /* color: ${props => props.theme.colors.primary}; */
  font-size: 2.0rem;
  }

  p {
  line-height: 23px;
  }

  h3 {
    font-size: 2.2rem;
  }

  li, a, button {
    font-family: 'Poppins', sans-serif;
  }

  input , button {
    height: 50px;
    border: 0;
    appearance: none;
    outline: none;
  }

  button {
    border-radius: 9px;
    letter-spacing: 1px;
    font-size: 1.7rem;
    background-color: transparent;
  }

  input {
    border-radius: 5px;
  }

a {
  text-decoration: none;
}

li {
  list-style: none;
}

#icon {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.7rem;
}

`

export const Title = styled.h1`
 font: 700 2.7rem Noto Sans;
 line-height: 32px;
 margin-top: 20px;
 margin-bottom: 9px;

  @media (min-width: 700px) {
    font-size: 4.7rem;
    line-height: 60px;
    margin-bottom: 14px;
  }
`

export const Second = styled.p`
  font-size: 1.7rem;
  margin-bottom: 14px;

  @media (min-width: 700px) {
    font-size: 3.2rem;
    line-height: 40px;
  }
`
