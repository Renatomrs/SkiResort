import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  margin-top: 60px;
  background-image: url("bannerSnowboard.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
  }

  div article {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  article p {
    font-size: 2.7rem;
    color: #fff;
    margin-bottom: 25px;
  }

  article a {
    width: 90%;
    max-width: 320px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #fff;
    border: 0.3rem solid #fff;
    border-radius: 9px;
    margin-bottom: 50px;
  }

  @media (min-width: 800px) {
    height: 80vh;

    div {
      justify-content: center;
    }

    article a {
      margin: 0;
    }

    article p {
      font-size: 4.0rem;
      margin-bottom: 35px;
    }

  }
`

export const ChosingOP = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

article {
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  div {
    width: 90%;
    max-width: 490px;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
  }

  img {
    max-width: 100%;
    height: 190px;
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 14px;
    background-color: #fff;
    margin: 7px 5px;
    object-fit: contain;
  }

  @media (min-width: 700px) {
    div {
      margin: 70px 0 70px 0;
    }

    img {
      height: 290px;
    }
  }
`

export const Tutor = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  padding: 0 0 9px 0;
  border-bottom: 1px solid #ddd;

  article {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 700px) {
      margin: 5px 0 0 0;
    }

  }

  div {
    width: 90%;
    max-width: 1145px;
    overflow: auto;
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 9px;
  }

  div article {
    width: 270px;
    min-width: 270px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 7px 14px;
    margin: 0 7px 0 7px;
  }

  div article header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  div article header span {
    margin: 0 0 0 7px;
    font-weight: bold;
    font-size: 1.7rem;
  }

  div img {
    width: 95px;
    height: 95px;
    max-width: 100%;
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 14px;
    background-color: #fff;
    margin: 0 5px 7px 0;
    object-fit: cover;
  }

  div p {
    margin-top: 2px;
  }
`

export const Resort = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  article {
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 700px) {
      margin: 25px 0 25px 0;
    }

  }

  img {
    width: 90%;
    height: 340px;
    max-width: 100%;
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 14px;
    background-color: #fff;
    margin: 7px 5px;
    object-fit: cover;
  }

  div a {
    width: 90%;
    max-width: 350px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2ecc71;
    color: #fff;
    border-radius: 9px;
    margin: 7px 0 14px 0;
  }
`

export const NewsL = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  border-bottom: 1px solid #ddd;

  @media (min-width: 700px) {
    height: 170px;
  }

form {
  width: 90%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}

form h3 {
  margin-bottom: 14px;
}

form div {
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  background-color: #fff;
  padding: 2px 3px 2px 14px;
  border-radius: 5px;
  border-radius: 32px;
  border: 1px solid #ddd;
}

form div input {
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  background-color: transparent
}

form div button {
  width: 55px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 2px 7px rgba(0,0,0,.2);
}

`
export const SocialMedia = styled.article`
  width: 90%;
  max-width: 314px;
  height: 100px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 5px;

ul {
  width: 100%;
  display: flex;
  flex-direction: row;
}

li {
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li div {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 7px;
}
`
