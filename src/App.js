import React, { useState, useEffect } from 'react';
import Yameru from './yameru.png';
import YameruGif from './Yameru.gif'
import styled from 'styled-components';
import './app.scss'
import ScreenShots from './Screenshots'

const Body = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  &.crazy{
    background: #43BBE1;
    color: white;
  }
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
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
`

const LogoContainer = styled.div`
  max-width: 200px;
  padding: 1em;
  & img{
  max-width: 100%;
  height: auto;
  }
`

const Footer = styled.div`
  margin-top:auto;
  width: 100%;
  text-align: center;
  padding-bottom: 1em;
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

const List = styled.ul`
  list-style-type: square;
  line-height: 2;
`

const ButtonContainer = styled.div`
  padding-top: 2em;
`

const Button = styled.button`
  min-width: 300px;
  border: 12px solid #FF0000;
  background: transparent;
  padding: 1em 3em;
  `

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
}


function App() {
  const [hover, setHover] = useState(false)
  const [os, setOS] = useState(false)
  const [modal, setModal] = useState(false)
  const setIsShown = (state) => {
    setHover(state)
  }
  const setIsModal = (state) => {
    setModal(state)
  }
  useEffect(() => {
    // Update the document title using the browser API
    setOS(getOS())
  }, [setOS]);

  return (
    <div className="App">
      <Body className={hover && 'crazy'}>
      { modal
      ? <ScreenShots setModal={setIsModal} />
      : <>
      <header className="App-header">
        <LinkWrap>
        <LinkContainer>
          <Link
          href='www.sunlabs.se'
          target="_blank"
          rel="noopener noreferrer"
          >source code</Link>
          </LinkContainer>
          <LinkContainer>
          <Link
            onClick={() => setIsModal(true)}
          >screenshots</Link>
          </LinkContainer>
        </LinkWrap>
      </header>
      <Main>
        <LogoContainer
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
          {hover
          ? <img className='fade-in' alt='logo' src={YameruGif} />
          : <img className='fade-in' alt='logo' src={Yameru} />
          }
        </LogoContainer>
        <Title>Yameru <span style={{color: 'red'}}>·</span> やめる</Title>
        <Subtitle>Protect your computer from theft at public events</Subtitle>
        <List>
          <li>Alarm when disconnected from power source</li>
          <li>Disable USB inputs</li>
          <li>Disable shutdown</li>
        </List>
        <ButtonContainer>
          { os === 'macOS'
          ? <button className="btn draw-border">Download for macOS</button>
          : <div>
            <p>We currently don't have support for your OS 😥</p>
            </div>
          }
        </ButtonContainer>
      </Main>
      </>
      }
      <Footer>
      <p>with <span style={{color: 'red'}}>&lt;3</span> from Uppsala</p>
      </Footer>
      </Body>
    </div>
  );
}

export default App;
