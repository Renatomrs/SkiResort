import Link from 'next/link'

import { HeaderContent } from "./styles"

import Menu from '../../assets/icon/menu.svg'

interface HeaderProps {
  extra?: string;
}

const DisplayMenu = () => {
  let hhh = document.querySelector('nav')
  hhh.style.left = '50%'
}

const DisplayMenux = () => {
  if (innerWidth  <= 900) {
    let hhh = document.querySelector('nav')
    hhh.style.left = '101%'
  }

}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContent>
      <div>
        <article>
          <Link href={"/"}>
            <span onClick={DisplayMenux} id="logo">Ski Resort</span>
          </Link>

          { props.children }
        </article>

        <button onClick={DisplayMenu} id="btnMenu">
          <img src={Menu} alt="Hambuguer-Menu" id="menu" />
        </button>
      </div>

      <nav>
        <ul>
          <li>
           <Link href={"/about"}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link href={"/contact"}>
              CONTACT
            </Link>
          </li>

          <li>
            <Link href={"/resevation"}>
              RESEVATION
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContent>
  )
}

export default Header
