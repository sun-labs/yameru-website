import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Yameru from './yameru.png'
import YameruGif from './Yameru.gif'
import styled from 'styled-components'
import './app.scss'
import ScreenShots from './Screenshots'
import Privacy from './Privacy'

const Body = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  & a {
      color: black;
      cursor: pointer;
      &:hover{
        color: red;
      }
    }
  &.crazy{
    background-color: #43BBE1;
    transition: background-color 500ms linear;
    color: white;
    & a {
      color: red;
      &:hover{
        color: black;
      }
    }
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
  font-weight: normal;
  color: ${props => props.hover ? 'white' : 'gray'};
  margin-top: 0;
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

function getOS () {
  var userAgent = window.navigator.userAgent
  var platform = window.navigator.platform
  var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
  var windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
  var iosPlatforms = ['iPhone', 'iPad', 'iPod']
  var os = null

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macOS'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows'
  } else if (/Android/.test(userAgent)) {
    os = 'Android'
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux'
  }
  return os
}

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path='*' render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  )
}

function Home (props) {
  const [hover, setHover] = useState(false)
  const [os, setOS] = useState(false)
  const [modal, setModal] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const setIsShown = (state) => {
    setHover(state)
  }
  const setIsModal = (state) => {
    setModal(state)
  }
  useEffect(() => {
    // Update the document title using the browser API
    setOS(getOS())
    setPrivacy(checkPrivacy())
  }, [setOS])

  const checkPrivacy = () => {
    if (props.location.search && props.location.search.includes('privacy')) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className='App'>
      <Body className={hover && 'crazy'}>
        {modal
          ? <ScreenShots setModal={setIsModal} />
          : <>
            {privacy
              ? <Privacy setModal={setPrivacy} />
              : <>
                <header className='App-header'>
                  <LinkWrap>
                    <LinkContainer>
                      <Link
                        href='https://github.com/search?q=org:sun-labs%20topic:yameru'
                        target='_blank'
                        rel='noopener noreferrer'
                      >source code
                      </Link>
                    </LinkContainer>
                    <LinkContainer>
                      <Link
                        onClick={() => setIsModal(true)}
                      >screenshots
                      </Link>
                    </LinkContainer>
                    <LinkContainer>
                      <Link
                        onClick={() => setPrivacy(true)}
                      >
                        Privacy Policy
                      </Link>
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
                      : <img className='fade-in' alt='logo' src={Yameru} />}
                  </LogoContainer>

                  <Title>Yameru <span style={{ color: 'red' }}>·</span> やめる</Title>
                  <Subtitle hover={hover}>Protect your computer from attacks and theft at public events</Subtitle>
                  <List>
                    <li>Protection from Rubber Ducky and other <a href='https://shop.hak5.org/collections/physical-access' target='_blank' rel='noopener noreferrer'>hotplug attacks</a></li>
                    <li>Alarm when disconnected from power source 🔊</li>
                    <li>Lockdown when intrusion is detected 🔒</li>
                    <li>Prevents computer from sleeping 😴</li>
                  </List>
                  <ButtonContainer>
                    {os === 'macOS'
                      ? <a href='https://apps.apple.com/se/app/yameru/id1511487314' target='_blank' rel='noopener noreferrer'><button className='btn draw-border'>Download for macOS</button></a>
                      : (
                        <div>
                          <p>We currently don't have support for your OS <span role='img'>😥</span></p>
                        </div>
                      )}
                  </ButtonContainer>
                </Main>
              </>}
            </>}
        <Footer>
          <p>with <span style={{ color: 'red' }}>&lt;3</span> from Uppsala</p>
        </Footer>
      </Body>
    </div>
  )
}
