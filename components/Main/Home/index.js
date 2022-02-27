import Link from 'next/link'
import { Fragment } from 'react'

import { LinkedinIcon, GithubIcon, CodepenIcon, HomeScrollIcon } from './Style'

import {
  HomeContainer,
  HomeData,
  HomeGreeting,
  HomeName,
  HomeEducation,
  HomeButtons,
  HomeHandle,
  HomeImg,
  HomeSocial,
  HomeSocialLink,
  HomeScroll,
  HomeScrollName,
} from './Style'

const index = () => {
  return (
    <Fragment>
      <section className="home section" id="home">
        <HomeContainer className=" container grid">
          <HomeData>
            <HomeGreeting>Hello, I'm</HomeGreeting>
            <HomeName>Mohammad Khaled Abu Mattar</HomeName>
            <HomeEducation>Software Engineering</HomeEducation>
            <HomeButtons>
              <a
                download
                href="assets/pdf/resume.pdf"
                className="button button--ghost"
              >
                Download CV
              </a>
              <Link href="#about">
                <a className="button">About me</a>
              </Link>
            </HomeButtons>
          </HomeData>

          <HomeHandle>
            <HomeImg src="assets/img/profile.png" alt="" />
          </HomeHandle>

          <HomeSocial>
            <HomeSocialLink
              href="https://www.linkedin.com/in/mkabumattar/"
              target="__blank"
            >
              <LinkedinIcon />
            </HomeSocialLink>
            <HomeSocialLink
              href="https://github.com/mkabumattar"
              target="__blank"
            >
              <GithubIcon />
            </HomeSocialLink>
            <HomeSocialLink
              href="https://codepen.io/mkabumattar"
              target="__blank"
            >
              <CodepenIcon />
            </HomeSocialLink>
          </HomeSocial>

          <HomeScroll href="#about">
            <HomeScrollIcon />
            <HomeScrollName>Scroll Down</HomeScrollName>
          </HomeScroll>
        </HomeContainer>
      </section>
    </Fragment>
  )
}

export default index
