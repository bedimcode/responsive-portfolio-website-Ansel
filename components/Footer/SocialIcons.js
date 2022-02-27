import { Fragment } from 'react'

import {
  LinkedinIcon,
  GithubIcon,
  CodepenIcon,
  LeetcodeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from './Style'

const SocialIcons = ({ icon }) => {
  return (
    <Fragment>
      {icon.toLowerCase() === 'linkedin'.toLowerCase() && <LinkedinIcon />}
      {icon.toLowerCase() === 'github'.toLowerCase() && <GithubIcon />}
      {icon.toLowerCase() === 'codepen'.toLowerCase() && <CodepenIcon />}
      {icon.toLowerCase() === 'leetcode'.toLowerCase() && <LeetcodeIcon />}
      {icon.toLowerCase() === 'facebook'.toLowerCase() && <FacebookIcon />}
      {icon.toLowerCase() === 'instagram'.toLowerCase() && <InstagramIcon />}
      {icon.toLowerCase() === 'twitter'.toLowerCase() && <TwitterIcon />}
    </Fragment>
  )
}

export default SocialIcons
