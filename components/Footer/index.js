import { Fragment, useState } from 'react'

import SocialData from '../../data/social.json'

import SocialIcons from './SocialIcons'

import {
  Footer,
  FooterContainer,
  FooterTitle,
  FooterList,
  FooterLink,
  FooterSocial,
  FooterSocialLink,
  FooterCopy,
} from './Style'

const index = () => {
  const [data, setData] = useState(SocialData)

  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Fragment>
      <Footer>
        <FooterContainer className="container">
          <FooterTitle>Mohammad Abu Mattar</FooterTitle>

          <FooterList>
            <li className="">
              <FooterLink href="#about">About</FooterLink>
            </li>
            <li className="">
              <FooterLink href="#skills">Skills</FooterLink>
            </li>
            <li className="">
              <FooterLink href="#work">Portfolio</FooterLink>
            </li>
            <li className="">
              <FooterLink href="#contact">Contact Me</FooterLink>
            </li>
          </FooterList>
        </FooterContainer>

        <FooterSocial>
          {data.map((result, index) => (
            <FooterSocialLink href={result.url} target="__blank" key={index}>
              <SocialIcons icon={result.name} />
            </FooterSocialLink>
          ))}
        </FooterSocial>

        <FooterCopy>
          All Copyrights Reserved &#169; {getYear() >= '2019' ? `2019 - ${getYear()}` : getYear()},
          Made With ❤ By Mohammad Khaled Abu Mattar
        </FooterCopy>
      </Footer>
    </Fragment>
  )
}

export default index
