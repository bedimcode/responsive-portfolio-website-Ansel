import { Fragment } from 'react'

import {
  FrontendIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  NextJSIcon,
  BackendIcon,
  SpringFrameWorkIcon,
  NodeJSIcon,
  PHPIcon,
  AWSIcon,
  DBIcon,
  PSQLIcon,
  MongoDBIcon,
  MySQLIcon,
  ToolsIcon,
  GitIcon,
  LinuxIcon,
  IntellijIcon,
  VSCodeIcon,
} from './Style'

const SkillsIcons = ({ icon }) => {
  return (
    <Fragment>
      {icon.toLowerCase() === 'Frontend Developer'.toLowerCase() && <FrontendIcon />}
      {icon.toLowerCase() === 'HTML5'.toLowerCase() && <HTMLIcon />}
      {icon.toLowerCase() === 'CSS'.toLowerCase() && <CSSIcon />}
      {icon.toLowerCase() === 'JavaScript'.toLowerCase() && <JSIcon />}
      {icon.toLowerCase() === 'ReactJS'.toLowerCase() && <ReactIcon />}
      {icon.toLowerCase() === 'NextJS'.toLowerCase() && <NextJSIcon />}
      {icon.toLowerCase() === 'Backend Developer'.toLowerCase() && <BackendIcon />}
      {icon.toLowerCase() === 'Spring Framework'.toLowerCase() && <SpringFrameWorkIcon />}
      {icon.toLowerCase() === 'NodeJS'.toLowerCase() && <NodeJSIcon />}
      {icon.toLowerCase() === 'AWS'.toLowerCase() && <AWSIcon />}
      {icon.toLowerCase() === 'PHP'.toLowerCase() && <PHPIcon />}
      {icon.toLowerCase() === 'DataBase'.toLowerCase() && <DBIcon />}
      {icon.toLowerCase() === 'PostgreSQL'.toLowerCase() && <PSQLIcon />}
      {icon.toLowerCase() === 'MangoDB'.toLowerCase() && <MongoDBIcon />}
      {icon.toLowerCase() === 'MySQL'.toLowerCase() && <MySQLIcon />}
      {icon.toLowerCase() === 'Tools'.toLowerCase() && <ToolsIcon />}
      {icon.toLowerCase() === 'Linux'.toLowerCase() && <LinuxIcon />}
      {icon.toLowerCase() === 'Git'.toLowerCase() && <GitIcon />}
      {icon.toLowerCase() === 'Intellij'.toLowerCase() && <IntellijIcon />}
      {icon.toLowerCase() === 'VS Code'.toLowerCase() && <VSCodeIcon />}
    </Fragment>
  )
}

export default SkillsIcons
