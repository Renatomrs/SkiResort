import React from 'react'
import Link from 'next/link'

import Head  from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

import sendIcon from '../assets/icon/btnSendIcon.svg'
import emailIcon from '../assets/icon/emailIcon.svg'

import { ChosingOP, Container, NewsL, Resort, SocialMedia, Tutor } from '../styles/pages/Home'

import { Title, Second } from '../styles/global'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ski Resort</title>
      </Head>

      <Header />

      <Container>
        <div>
          <article>
            <p>
              Looking for an adventure?
            </p>

            <Link href={"/resevation"}>
              RESEVE NOW
            </Link>
          </article>
        </div>
      </Container>

      <ChosingOP>
        <article>
          <Title>
            Do you prefer Ski or Snowboard?
          </Title>

          <Second>
            No worries! Here is the place for whatever you like.
          </Second>

        </article>

        <div>
          <img src="ski.jpg" alt="Ski" />
          <img src="snowboard.jpg" alt="Snowboard" />
        </div>
      </ChosingOP>

      <Tutor>
        <article>
          <Title>
            What would you like to play?
          </Title>

          <Second>
            We have certifield tutor to help you.
          </Second>
        </article>

        <div>
          <article>
            <header>
              <img src="perfil.jpg" alt="Perfil" />
              <span>Adan Souzik</span>
            </header>

            <p>I came from Norway and I've learn since child. I'm especialized to teach begginers.</p>
          </article>

          <article>
            <header>
              <img src="perfil2.jpg" alt="Perfil" />
              <span>Macy Smith</span>
            </header>

            <p>I'm from Colorado in the USA and I've been snowbording for more than 20 yars.</p>
          </article>

          <article>
            <header>
              <img src="perfil4.jpg" alt="Perfil" />
              <span>Zaha Wasgrts</span>
            </header>

            <p>I have a big passion for ski. If you are begginer I want to be a part of your jorney.</p>
          </article>

          <article>
            <header>
              <img src="perfil5.jpg" alt="Perfil" />
              <span>Kris hurink</span>
            </header>

            <p>Snow board is my bigest hoby. If you wanna learn, let me know.</p>
          </article>
        </div>
      </Tutor>

      <Resort>
        <article>
          <Title>
            We have acomodation for you!
          </Title>

          <Second>
            Just book a resevation with us.
          </Second>
        </article>

        <div>
          <img src="resort.jpg" alt="Resort" />
            <Link href={"/resevation"}>
              RESEVE NOW
            </Link>
        </div>
      </Resort>

      <NewsL>
        <form action="/">
          <h3>Subscrabe on News Letter</h3>

          <div>
            <img src={emailIcon} alt="Email Icon" id="icon"/>
            <input type="email" placeholder="E-mail" maxLength={32} />
            <button><img src={sendIcon} alt="Button Send" id="icon"/></button>
          </div>
        </form>

        <SocialMedia>
          <ul>
            <li>
              <div>
                <i className="fab fa-facebook-f" id="icon"></i>
              </div>

              Facebook
            </li>

            <li>
              <div>
                <i className="fab fa-youtube" id="icon"></i>
              </div>

              Youtube
            </li>

            <li>
              <div>
                <i className="fab fa-instagram" id="icon"></i>
              </div>

              Instagram
            </li>
          </ul>
        </SocialMedia>
      </NewsL>

      <Footer />
    </>
  )
}

export default Home
