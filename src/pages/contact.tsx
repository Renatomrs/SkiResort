import React from 'react'
import Head  from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'

import Back from '../assets/icon/home.svg'
import { Contato } from '../styles/pages/Contact'

const PageContact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Header>
        <Link href={"./"}>
          <img src={Back} alt="Previews" id="BackButton" />
        </Link>
      </Header>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>

      <Contato>
        <p>Contact Page</p>
      </Contato>
    </>
  )
}

export default PageContact
