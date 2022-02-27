import styled from 'styled-components'

import { BiMailSend, BiRightArrowAlt } from 'react-icons/bi'
import { BsWhatsapp, BsMessenger } from 'react-icons/bs'

export const RightArrowIcon = styled(BiRightArrowAlt)`
  height: 1rem;
  width: 1rem;
  transition: 0.4s;
`
export const MailSendIcon = styled(BiMailSend)`
  height: 2rem;
  width: 2rem;
  color: var(--title-color);
  margin-bottom: 0.25rem;
`
export const WhatsappIcon = styled(BsWhatsapp)`
  height: 2rem;
  width: 2rem;
  color: var(--title-color);
  margin-bottom: 0.25rem;
`
export const MessengerIcon = styled(BsMessenger)`
  height: 2rem;
  width: 2rem;
  color: var(--title-color);
  margin-bottom: 0.25rem;
`

export const ContactContainer = styled.div`
  row-gap: 3rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    column-gap: 3rem;
  }

  @media screen and (min-width: 992) {
    column-gap: 6rem;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 6rem;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 6rem;
  }
`

export const ContactContent = styled.div``

export const ContactTitle = styled.h3`
  text-align: center;
  font-size: var(--h3-font-size);
  margin-bottom: 1.5rem;
`

export const ContactInfo = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: 300px;
    justify-content: center;
  }
`

export const ContactCard = styled.div`
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;

  .light-theme && {
    box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
  }
`

export const ContactCardTitle = styled.h3`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
`

export const ContactCardData = styled.span`
  font-size: var(--small-font-size);
  display: block;
  margin-bottom: 0.75rem;
`

export const ContactButton = styled.a`
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;

  &&:hover ${RightArrowIcon} {
    transform: translateX(0.25rem);
  }
`

export const ContactForm = styled.form`
  @media screen and (min-width: 576px) {
    width: 360px;
    margin: 0 auto;
  }
`

export const ContactFormDiv = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
`

export const ContactFormArea = styled(ContactFormDiv)`
  height: 11rem;

  /* && textarea {
    resize: none;
  } */
`

export const ContactFormTag = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: var(--smaller-font-size);
  padding: 0.25rem;
  background-color: var(--body-color);
  z-index: 10;
`

export const ContactFormInput = styled.input`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--text-color-light);
  background: none;
  color: var(--text-color);
  outline: none;
  padding: 1.5rem;
  border-radius: 0.75rem;
  z-index: 1;
`

export const ContactFormTextarea = styled(ContactFormInput).attrs({
  as: 'textarea',
})`
  resize: none;
`
