import { Fragment } from 'react'

import {
  AWSIcon,
  AndroidIcon,
  AngularIcon,
  BootStrapIcon,
  CSS3Icon,
  CSharpIcon,
  ExpressIcon,
  GradleIcon,
  GraphQLIcon,
  HTML5Icon,
  JavaIcon,
  JSIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  PWAIcon,
  PostgreSQLIcon,
  ReactJSIcon,
  SpringFrameWorkIcon,
  StyledComponentsIcon,
  BabelIcon,
} from './Style'

const TagesIcons = ({ icon }) => {
  return (
    <Fragment>
      {icon.toLowerCase() === 'AWS'.toLowerCase() && <AWSIcon />}
      {icon.toLowerCase() === 'Android'.toLowerCase() && <AndroidIcon />}
      {icon.toLowerCase() === 'AngularJS'.toLowerCase() && <AngularIcon />}
      {icon.toLowerCase() === 'Bootstrap'.toLowerCase() && <BootStrapIcon />}
      {icon.toLowerCase() === 'CSS3'.toLowerCase() && <CSS3Icon />}
      {icon.toLowerCase() === 'C#'.toLowerCase() && <CSharpIcon />}
      {icon.toLowerCase() === 'Express'.toLowerCase() && <ExpressIcon />}
      {icon.toLowerCase() === 'Gradle'.toLowerCase() && <GradleIcon />}
      {icon.toLowerCase() === 'GraphQL'.toLowerCase() && <GraphQLIcon />}
      {icon.toLowerCase() === 'HTML5'.toLowerCase() && <HTML5Icon />}
      {icon.toLowerCase() === 'Java'.toLowerCase() && <JavaIcon />}
      {icon.toLowerCase() === 'JavaScript'.toLowerCase() && <JSIcon />}
      {icon.toLowerCase() === 'MongoDB'.toLowerCase() && <MongoDBIcon />}
      {icon.toLowerCase() === 'NextJS'.toLowerCase() && <NextJSIcon />}
      {icon.toLowerCase() === 'NodeJS'.toLowerCase() && <NodeJSIcon />}
      {icon.toLowerCase() === 'Progressive Web App'.toLowerCase() && <PWAIcon />}
      {icon.toLowerCase() === 'PostgreSQL'.toLowerCase() && <PostgreSQLIcon />}
      {icon.toLowerCase() === 'ReactJS'.toLowerCase() && <ReactJSIcon />}
      {icon.toLowerCase() === 'Spring Framework'.toLowerCase() && <SpringFrameWorkIcon />}
      {icon.toLowerCase() === 'Styled Components'.toLowerCase() && <StyledComponentsIcon />}
      {icon.toLowerCase() === 'Babel'.toLowerCase() && <BabelIcon />}
    </Fragment>
  )
}

export default TagesIcons
