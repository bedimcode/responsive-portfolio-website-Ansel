import styled from 'styled-components'

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiAws,
  DiDatabase,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiGit,
  DiLinux,
  DiIntellij,
} from 'react-icons/di'
import { BsBraces } from 'react-icons/bs'
import { BiServer } from 'react-icons/bi'
import { AiOutlineTool } from 'react-icons/ai'

import NextJS from '../../../icons/NextJS'
import SpringFrameWork from '../../../icons/SpringFrameWork'
import VSCode from '../../../icons/Visual Studio Code'

const size = '1.8rem'

export const FrontendIcon = styled(BsBraces)`
  height: ${size};
  width: ${size};
`
export const HTMLIcon = styled(DiHtml5)`
  height: ${size};
  width: ${size};
`
export const CSSIcon = styled(DiCss3)`
  height: ${size};
  width: ${size};
`
export const JSIcon = styled(DiJavascript)`
  height: ${size};
  width: ${size};
`
export const ReactIcon = styled(DiReact)`
  height: ${size};
  width: ${size};
`
export const NextJSIcon = styled(NextJS)`
  height: ${size};
  width: ${size};
`
export const BackendIcon = styled(BiServer)`
  height: ${size};
  width: ${size};
`
export const SpringFrameWorkIcon = styled(SpringFrameWork)`
  height: ${size};
  width: ${size};
`
export const NodeJSIcon = styled(DiNodejsSmall)`
  height: ${size};
  width: ${size};
`
export const PHPIcon = styled(DiPhp)`
  height: ${size};
  width: ${size};
`
export const AWSIcon = styled(DiAws)`
  height: ${size};
  width: ${size};
`
export const DBIcon = styled(DiDatabase)`
  height: ${size};
  width: ${size};
`
export const PSQLIcon = styled(DiPostgresql)`
  height: ${size};
  width: ${size};
`
export const MySQLIcon = styled(DiMysql)`
  height: ${size};
  width: ${size};
`
export const MongoDBIcon = styled(DiMongodb)`
  height: ${size};
  width: ${size};
`
export const ToolsIcon = styled(AiOutlineTool)`
  height: ${size};
  width: ${size};
`
export const GitIcon = styled(DiGit)`
  height: ${size};
  width: ${size};
`
export const LinuxIcon = styled(DiLinux)`
  height: ${size};
  width: ${size};
`
export const IntellijIcon = styled(DiIntellij)`
  height: ${size};
  width: ${size};
`
export const VSCodeIcon = styled(VSCode)`
  height: ${size};
  width: ${size};
`

export const SkillsContainer = styled.div`
  row-gap: 2rem;
  padding-top: 1rem;

  @media screen and (min-width: 576px) {
    justify-content: center;
  }

  @media screen and (min-width: 992) {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
  }
`

export const SkillsContent = styled.div`
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 1.25rem;

  @media screen and (min-width: 576px) {
    padding: 2rem 4rem;
  }

  .light-theme && {
    box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
  }
`

export const SkillsTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--first-color);
  text-align: center;
  margin-bottom: 1.5rem;
`

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;

  @media screen and (max-width: 320px) {
    column-gap: 1rem;
  }
`

export const SkillsGroup = styled.div`
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;
`

export const SkillsData = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

export const SkillsName = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  line-height: 18px;

  @media screen and (max-width: 320px) {
    font-size: var(--small-font-size);
  }
`
export const SkillsLevel = styled.span`
  font-size: var(--tiny-font-size);
`
