import React from 'react'
import Head  from 'next/head'
import Link from 'next/link'

import { Box } from '../styles/pages/Resevation'

import Header from '../components/Header'

import Back from '../assets/icon/home.svg'

const Teste: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resevation</title>
      </Head>

      <Header>
        <Link href={"./"}>
          <img src={Back} alt="Previews" id="BackButton" />
        </Link>
      </Header>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

      <Box>
        <p>Resevation Page</p>
      </Box>

    </>
  )
}

export default Teste
