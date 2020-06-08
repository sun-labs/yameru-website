import React from 'react'
import styled from 'styled-components'
import Yameru from './yameru.png'

import './app.scss'

import Screenshot1 from './img/screen1.png'
import Screenshot2 from './img/screen2.png'
import Screenshot3 from './img/screen3.png'
import Screenshot4 from './img/screen4.png'
import Screenshot5 from './img/screen5.png'
import Screenshot6 from './img/screen6.png'
import Screenshot7 from './img/screen7.png'
import Screenshot8 from './img/screen8.png'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Icon = styled.img`
  padding: 1em;
  max-width: 75px;
  max-height: 75px;
`

const LinkWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 2em;
`

const LinkContainer = styled.div`
  padding: 0.5em 1em;
`

const Link = styled.a`
  text-transform: uppercase;
  color: black;
  text-decoration: underline;
  color: #FF0000;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
`

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 2em;
  }
`

const Subtitle = styled.h3`
  color: #5A5A5A;
  text-align: center;
  @media (max-width: 767px) {
  font-size: 0.8em;
  }
`

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ScreenShot = styled.img`
  width: 600px;
  height: auto;
  max-width: 100%;
`

function Screenshots (props) {
  return (
    <div>
      <Header>
        <Icon className='fade-in' alt='logo' src={Yameru} />
        <LinkWrap>
          <LinkContainer>
            <Link
              onClick={() => props.setModal(false)}
            >Close
            </Link>
          </LinkContainer>
        </LinkWrap>
      </Header>
      <Main>
        <Title>
        Screenshots <span style={{ color: 'red' }}>·</span> <br />
        スクリーンショット
        </Title>
        <Subtitle>
          Gigapixels of security
        </Subtitle>
        <ImgWrap>
          <ImgContainer>
            <ScreenShot src={Screenshot1} />
            <ScreenShot src={Screenshot2} />
          </ImgContainer>
          <ImgContainer>
            <ScreenShot src={Screenshot3} />
            <ScreenShot src={Screenshot6} />
          </ImgContainer>
          <ImgContainer>
            <ScreenShot src={Screenshot5} />
            <ScreenShot src={Screenshot4} />
          </ImgContainer>
          <ImgContainer>
            <ScreenShot src={Screenshot8} />
            <ScreenShot src={Screenshot7} />
          </ImgContainer>
        </ImgWrap>
      </Main>
    </div>
  )
}

export default Screenshots
