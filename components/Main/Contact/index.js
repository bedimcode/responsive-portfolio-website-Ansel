import { Fragment, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { SectionTitle, SectionSubtitle } from '../../../styles/Style'

import { MailSendIcon, WhatsappIcon, MessengerIcon, RightArrowIcon } from './Style'

import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactInfo,
  ContactCard,
  ContactCardTitle,
  ContactCardData,
  ContactButton,
  ContactForm,
  ContactFormDiv,
  ContactFormArea,
  ContactFormTag,
  ContactFormInput,
  ContactFormTextarea,
} from './Style'

const index = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
          e.target.reset()
        },
      )
  }

  return (
    <Fragment>
      <section className="contact section" id="contact">
        <SectionSubtitle>Get in touch</SectionSubtitle>
        <SectionTitle>Contact Me</SectionTitle>

        <ContactContainer className="container grid">
          <ContactContent>
            <ContactTitle>Talk to me</ContactTitle>
            <ContactInfo>
              <ContactCard>
                <MailSendIcon />
                <ContactCardTitle>Email</ContactCardTitle>
                <ContactCardData>mohammad.khaled@outlook.com</ContactCardData>

                <ContactButton href="mailto:mohammad.khaled@outlook.com" target="__blank">
                  Write me <RightArrowIcon />
                </ContactButton>
              </ContactCard>

              <ContactCard>
                <WhatsappIcon />
                <ContactCardTitle>Whatsapp</ContactCardTitle>
                <ContactCardData>+962-79-650-332</ContactCardData>

                <ContactButton
                  href="https://api.whatsapp.com/send?phone=962790650332&text=Hello, more information!"
                  target="__blank"
                >
                  Write me <RightArrowIcon />
                </ContactButton>
              </ContactCard>

              <ContactCard>
                <MessengerIcon />
                <ContactCardTitle>Messenger</ContactCardTitle>
                <ContactCardData>Mohammad Abu Mattar</ContactCardData>

                <ContactButton href="http://m.me/mkabumattar" target="__blank">
                  Write me <RightArrowIcon />
                </ContactButton>
              </ContactCard>
            </ContactInfo>
          </ContactContent>

          <ContactContent>
            <ContactTitle>Write me your project</ContactTitle>

            <ContactForm ref={form} onSubmit={sendEmail}>
              <ContactFormDiv>
                <ContactFormTag htmlFor="name">Name</ContactFormTag>
                <ContactFormInput
                  type="text"
                  placeholder="Insert your name"
                  id="name"
                  name="name"
                  required
                />
              </ContactFormDiv>

              <ContactFormDiv>
                <ContactFormTag htmlFor="email">Mail</ContactFormTag>
                <ContactFormInput
                  type="email"
                  placeholder="Insert your email"
                  id="email"
                  name="email"
                  required
                />
              </ContactFormDiv>

              <ContactFormArea>
                <ContactFormTag htmlFor="message">Project</ContactFormTag>
                <ContactFormTextarea
                  cols="30"
                  rows="10"
                  placeholder="Write your project"
                  id="message"
                  name="message"
                  required
                ></ContactFormTextarea>
              </ContactFormArea>

              <button type="submit" className="button">
                Send Message
              </button>
            </ContactForm>
          </ContactContent>
        </ContactContainer>
      </section>
    </Fragment>
  )
}

export default index
