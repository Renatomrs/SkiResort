import styled from 'styled-components'

export const HeaderContent = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

  div {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 25px;
  }

  div article {
    width: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    width: 50%;
    height: calc(99vh - 60px);
    display: flex;
    z-index: 2000;
    position: absolute;
    top: 60px;
    left: 101%;
    transition: 900ms;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px 7px #c2c2c2;
  }

  li {
    list-style: none;
    margin-bottom: 19px;
  }

  li a {
    font-size: 1.7rem;
    padding: 5px 14px;
    color: #323232;
  }

  #BackButton {
    width: 22px;
    cursor: pointer;
  }

  #logo {
    font-size: 1.7rem;
    font-weight: bold;
    cursor: pointer;
  }

  #btnMenu {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  #menu {
    width: 35px;
  }

  @media (min-width: 900px) {
    flex-direction: row;

    div {
      padding: 0 0 0 50px;
    }

    nav {
      min-height: 60px;
      display: flex;
      flex-direction: row;
      padding: 0 50px 0 0;
      left: 50%;
    }

    ul {
      height: 60px;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      box-shadow: none;
      margin-top: -61px;
    }

    li {
      margin: 0;
    }

    li a {
    font-size: 1.5rem;
  }

    #btnMenu {
      display: none;
    }

    #logo {
      margin: 0;
    }

  }
`
