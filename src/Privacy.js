import React from 'react'
import {
  useHistory
} from 'react-router-dom'
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
  max-width: 600px;
  margin: 0 auto;
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
  const history = useHistory()
  return (
    <div>
      <Header>
        <Icon className='fade-in' alt='logo' src={Yameru} />
        <LinkWrap>
          <LinkContainer>
            <Link
              onClick={() => {
                props.setModal(false)
                history.push('/')
              }}
            >Close
            </Link>
          </LinkContainer>
        </LinkWrap>
      </Header>
      <Main>
        <Title>
        Privacy Policy for Sun Labs Nordic <span style={{ color: 'red' }}>·</span> <br />
        スクリーンショット
        </Title>

        <p>At Yameru, accessible from http://yameru.sunlabs.se/ or App Store, one of our main priorities is the privacy of our users. This Privacy Policy document contains types of information that is collected and recorded by Yameru and how we use it.</p>

        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website/app with regards to the information that they shared and/or collect in Yameru. This policy is not applicable to any information collected offline or via channels other than this website/app.</p>

        <h2>Consent</h2>

        <p>By using our website/app, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2>Information we collect</h2>

        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

        <h2>How we use your information</h2>

        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our webste</li>
          <li>Improve, personalize, and expand our webste</li>
          <li>Understand and analyze how you use our webste</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Advertising Partners Privacy Policies</h2>

        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Yameru.</p>

        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Yameru, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on website/apps that you visit.</p>

        <p>Note that Yameru has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2>Third Party Privacy Policies</h2>

        <p>Yameru's Privacy Policy does not apply to other advertisers or website/apps. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective website/apps.</p>

        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>GDPR Data Protection Rights</h2>

        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2>Children's Information</h2>

        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

        <p>Yameru does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website/app, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
      </Main>
    </div>
  )
}

export default Screenshots
