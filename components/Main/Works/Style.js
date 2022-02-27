import styled from 'styled-components'

import { BiRightArrowAlt } from 'react-icons/bi'

import {
  DiAndroid,
  DiAngularSimple,
  DiAws,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
} from 'react-icons/di'
import Babel from '../../../icons/Babel'
import CSharp from '../../../icons/CSharp'
import Express from '../../../icons/Express'
import Gradle from '../../../icons/Gradle'
import GraphQL from '../../../icons/GraphQL'
import NextJS from '../../../icons/NextJS'
import PWA from '../../../icons/PWA'
import SpringFrameWork from '../../../icons/SpringFrameWork'
import StyledComponents from '../../../icons/StyledComponents'

export const RightArrowIcon = styled(BiRightArrowAlt)`
  height: 1rem;
  width: 1rem;
  transition: 0.4s;
`

const size = '1rem'

export const AndroidIcon = styled(DiAndroid)`
  height: ${size};
  width: ${size};
`
export const AngularIcon = styled(DiAngularSimple)`
  height: ${size};
  width: ${size};
`
export const AWSIcon = styled(DiAws)`
  height: ${size};
  width: ${size};
`
export const BootStrapIcon = styled(DiBootstrap)`
  height: ${size};
  width: ${size};
`
export const CSS3Icon = styled(DiCss3)`
  height: ${size};
  width: ${size};
`
export const HTML5Icon = styled(DiHtml5)`
  height: ${size};
  width: ${size};
`
export const JavaIcon = styled(DiJava)`
  height: ${size};
  width: ${size};
`
export const JSIcon = styled(DiJavascript)`
  height: ${size};
  width: ${size};
`
export const MongoDBIcon = styled(DiMongodb)`
  height: ${size};
  width: ${size};
`
export const NodeJSIcon = styled(DiNodejsSmall)`
  height: ${size};
  width: ${size};
`
export const PostgreSQLIcon = styled(DiPostgresql)`
  height: ${size};
  width: ${size};
`
export const BabelIcon = styled(Babel)`
  height: ${size};
  width: ${size};
`
export const CSharpIcon = styled(CSharp)`
  height: ${size};
  width: ${size};
`
export const ExpressIcon = styled(Express)`
  height: ${size};
  width: ${size};
`
export const GradleIcon = styled(Gradle)`
  height: ${size};
  width: ${size};
`
export const GraphQLIcon = styled(GraphQL)`
  height: ${size};
  width: ${size};
`
export const NextJSIcon = styled(NextJS)`
  height: ${size};
  width: ${size};
`
export const PWAIcon = styled(PWA)`
  height: ${size};
  width: ${size};
`
export const SpringFrameWorkIcon = styled(SpringFrameWork)`
  height: ${size};
  width: ${size};
`
export const StyledComponentsIcon = styled(StyledComponents)`
  height: ${size};
  width: ${size};
`
export const ReactJSIcon = styled(DiReact)`
  height: ${size};
  width: ${size};
`

export const WorkImg = styled.img`
  border-radius: 1rem;
  margin-bottom: 0.75rem;
  width: 100%;

  @media screen and (min-width: 992) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 1rem;
  }
`

export const WorkTitle = styled.h3`
  font-size: var(--h2-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 0.25rem;

  @media screen and (min-width: 992) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0.5rem;
  }
`

export const WorkDirection = styled.p`
  line-height: 1.2rem;
  && > span {
    font-size: var(--normal-font-size);
    font-weight: var(--font-semibold);
  }
`

export const WorkTags = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  line-height: 1.2rem;
  margin-top: 0.5rem;

  && > span:first-child {
    font-size: var(--normal-font-size);
    font-weight: var(--font-semibold);
  }
`

export const WorkTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

export const WorkButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.5rem;
`

export const WorkButton = styled.a`
  width: max-content;
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  &&:hover ${RightArrowIcon} {
    transform: translateX(0.25rem);
  }
`
