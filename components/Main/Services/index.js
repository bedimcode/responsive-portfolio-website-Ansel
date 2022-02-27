import { Fragment, useState } from 'react'

import ServiceData from '../../../data/service.json'

import ServicesIcon from './ServicesIcon'

import { SectionTitle, SectionSubtitle } from '../../../styles/Style'

import { RightArrowIcon, CloseIcon, CheckIcon } from './Style'

import {
  ServicesContainer,
  ServicesCard,
  ServicesTitle,
  ServicesButton,
  ServicesModal,
  ServicesModalContent,
  ServicesModalTitle,
  ServicesModalDescription,
  ServicesModalList,
  ServicesModalItem,
  ServicesModalInfo,
} from './Style'

const index = () => {
  const [data, setData] = useState(ServiceData)

  const [frontendOpacity, setFrontendOpacity] = useState('0')
  const [frontendVisibility, setFrontendVisibility] = useState('hidden')

  const [backendOpacity, setBackendOpacity] = useState('0')
  const [backendVisibility, setBackendVisibility] = useState('hidden')

  const [brandingOpacity, setBrandingOpacity] = useState('0')
  const [brandingVisibility, setBrandingVisibility] = useState('hidden')

  const handleFrontend = () => {
    if (frontendOpacity === '0') {
      setFrontendOpacity('1')
      setFrontendVisibility('visible')
    } else {
      setFrontendOpacity('0')
      setFrontendVisibility('hidden')
    }
  }

  const handleBackend = () => {
    if (backendOpacity === '0') {
      setBackendOpacity('1')
      setBackendVisibility('visible')
    } else {
      setBackendOpacity('0')
      setBackendVisibility('hidden')
    }
  }

  const handleBranding = () => {
    if (brandingOpacity === '0') {
      setBrandingOpacity('1')
      setBrandingVisibility('visible')
    } else {
      setBrandingOpacity('0')
      setBrandingVisibility('hidden')
    }
  }

  return (
    <Fragment>
      <section className="services section">
        <SectionSubtitle>What I Offer</SectionSubtitle>
        <SectionTitle>My Services</SectionTitle>

        <ServicesContainer className="container grid">
          {data.map((result, index) => (
            <ServicesCard key={index}>
              <ServicesIcon icon={result.category} />
              <ServicesTitle>{result.category}</ServicesTitle>

              <ServicesButton
                onClick={
                  result.handle === 'handleFrontend'
                    ? handleFrontend
                    : result.handle === 'handleBackend'
                    ? handleBackend
                    : handleBranding
                }
              >
                See more <RightArrowIcon className="services__icon" />
              </ServicesButton>

              <ServicesModal
                style={{
                  opacity: `${
                    result.handle === 'handleFrontend'
                      ? frontendOpacity
                      : result.handle === 'handleBackend'
                      ? backendOpacity
                      : brandingOpacity
                  }`,
                  visibility: `${
                    result.handle === 'handleFrontend'
                      ? frontendVisibility
                      : result.handle === 'handleBackend'
                      ? backendVisibility
                      : brandingVisibility
                  }`,
                }}
              >
                <ServicesModalContent>
                  <CloseIcon
                    onClick={
                      result.handle === 'handleFrontend'
                        ? handleFrontend
                        : result.handle === 'handleBackend'
                        ? handleBackend
                        : handleBranding
                    }
                  />
                  <ServicesModalTitle>{result.category}</ServicesModalTitle>
                  <ServicesModalDescription>{result.description}</ServicesModalDescription>
                  <ServicesModalList>
                    {result.servicesList.map((service, idx) => (
                      <ServicesModalItem key={idx}>
                        <CheckIcon />
                        <ServicesModalInfo>{service}</ServicesModalInfo>
                      </ServicesModalItem>
                    ))}
                  </ServicesModalList>
                </ServicesModalContent>
              </ServicesModal>
            </ServicesCard>
          ))}
        </ServicesContainer>
      </section>
    </Fragment>
  )
}

export default index
