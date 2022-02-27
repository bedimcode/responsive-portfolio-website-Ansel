import { Fragment, useState, useEffect } from 'react'

import PortfolioData from '../../../data/portfolio.json'

import { SectionTitle, SectionSubtitle } from '../../../styles/Style'

import { RightArrowIcon } from './Style'

import {
  WorkImg,
  WorkTitle,
  WorkDirection,
  WorkTags,
  WorkTag,
  WorkButtons,
  WorkButton,
} from './Style'

import TagesIcons from './TagesIcons'

const index = () => {
  const [data, setData] = useState(PortfolioData)

  let linkwork

  useEffect(() => {
    let mixerPortfolio = mixitup('.work__container', {
      selectors: {
        target: '.work__card',
      },
      animation: {
        duration: 300,
      },
    })

    /* Link active work */
    linkwork = document.querySelectorAll('.work__item')
    linkwork.forEach((i) => i.addEventListener('click', activeWork))
  }, [])

  function activeWork() {
    linkwork.forEach((i) => i.classList.remove('active-work'))
    this.classList.add('active-work')
  }

  return (
    <Fragment>
      <section className="work section" id="work">
        <SectionSubtitle>Recent Works</SectionSubtitle>
        <SectionTitle>My Portfolio</SectionTitle>

        <div className="work__filters">
          <span className="work__item active-work" data-filter="all">
            All
          </span>
          <span className="work__item" data-filter=".frontend">
            Frontend
          </span>
          <span className="work__item" data-filter=".backend">
            Backend
          </span>
          <span className="work__item" data-filter=".android">
            Android
          </span>
          <span className="work__item" data-filter=".desktop">
            Desktop
          </span>
        </div>

        <div className="work__container container">
          {data.map((result, index) => (
            <div className={`work__card mix ${result.type}`} key={index}>
              <WorkImg src={result.src} alt={`${result.headline}\r\n${result.direction}`} />
              <WorkTitle>{result.headline}</WorkTitle>
              <WorkDirection>
                <span>Direction:</span> {result.direction}
              </WorkDirection>
              <WorkTags>
                <span>Tages:</span>
                {result.tags.map((tag, idx) => (
                  <WorkTag key={idx}>
                    <TagesIcons icon={tag} />
                    {tag}
                  </WorkTag>
                ))}
              </WorkTags>
              <WorkButtons>
                {result.links.map((link, idx) => (
                  <WorkButton href={link.url} target="__blank" key={idx}>
                    {link.name} <RightArrowIcon />
                  </WorkButton>
                ))}
              </WorkButtons>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  )
}

export default index
