import React from 'react'
import Head  from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'

import Back from '../assets/icon/home.svg'
import { Test } from '../styles/pages/About'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Header>
        <Link href={"./"}>
          <img src={Back} alt="Previews" id="BackButton" />
        </Link>
      </Header>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>

      <Test>
        <p>About Page</p>
      </Test>
    </>
  )
}

export default About
