import styled from 'styled-components'

import { BiRightArrowAlt, BiX, BiPencil, BiCheck } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { GiServerRack } from 'react-icons/gi'

let size = '1.8rem'

export const RightArrowIcon = styled(BiRightArrowAlt)``
export const CloseIcon = styled(BiX)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
`
export const FrontendIcon = styled(CgWebsite)`
  height: ${size};
  width: ${size};
`
export const BackendIcon = styled(GiServerRack)`
  height: ${size};
  width: ${size};
`
export const BrandingIcon = styled(BiPencil)`
  height: ${size};
  width: ${size};
`
export const CheckIcon = styled(BiCheck)`
  height: 1.5rem;
  width: 1.5rem;
  color: var(--first-color);
`

export const ServicesContainer = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 1rem;

  @media screen and (max-width: 320px) {
    grid-template-columns: 145px;
    justify-content: center;
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 160px);
    justify-content: center;
  }

  @media screen and (min-width: 992) {
    grid-template-columns: repeat(3, 192px);
    column-gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 192px);
    column-gap: 3rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 192px);
    column-gap: 3rem;
  }
`

export const ServicesCard = styled.div`
  background-color: var(--container-color);
  padding: 3rem 1.5rem 1.5rem;
  border-radius: 1rem;

  @media screen and (min-width: 992) {
    padding: 5rem 2rem 1.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 5rem 2rem 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 5rem 2rem 1.5rem;
  }

  .light-theme && {
    box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
  }
`

export const ServicesTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin: 2rem 0;
`
export const ServicesButton = styled.span`
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;

  .services__icon {
    height: 1rem;
    width: 1rem;
    transition: 0.4s;
  }

  && :hover .services__icon {
    transform: translateX(0.25rem);
  }
`
export const ServicesModal = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(var(--second-hue), 28%, 16%, 0.7);
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
  z-index: var(--z-modal);
`

export const ServicesModalContent = styled.div`
  position: relative;
  background-color: var(--body-color);
  padding: 4.5rem 1.5rem 2.5rem;
  border-radius: 1.5rem;

  @media screen and (min-width: 576px) {
    width: 500px;
    padding: 4.5rem 2.5rem 2.5rem;
  }
`
export const ServicesModalTitle = styled.h3`
  text-align: center;
  font-size: var(--h3-font-size);
  color: var(--first-color);
  margin-bottom: 1rem;
`

export const ServicesModalDescription = styled.p`
  text-align: center;
  font-size: var(--small-font-size);
  margin-bottom: 2rem;

  @media screen and (min-width: 576px) {
    padding: 0 3.5rem;
  }
`

export const ServicesModalList = styled.ul`
  display: grid;
  row-gap: 0.75rem;
`

export const ServicesModalItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`
export const ServicesModalInfo = styled.p`
  font-size: var(--small-font-size);
`
