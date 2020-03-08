import React from 'react'
import styled from 'styled-components'
import Yameru from './yameru.png'

import './app.scss'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Icon = styled.img`
  padding: 1em;
  max-width: 75px;
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
      </Main>
    </div>
  )
}

export default Screenshots
