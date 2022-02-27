import { Fragment } from 'react'

import { FrontendIcon, BackendIcon, BrandingIcon } from './Style'

const ServicesIcon = ({ icon }) => {
  return (
    <Fragment>
      {icon.toLowerCase() === 'Frontend Developer'.toLowerCase() && <FrontendIcon />}
      {icon.toLowerCase() === 'Backend Developer'.toLowerCase() && <BackendIcon />}
      {icon.toLowerCase() === 'Branding Designer'.toLowerCase() && <BrandingIcon />}
    </Fragment>
  )
}

export default ServicesIcon
