import { createElement } from 'react'
import PropTypes from 'prop-types'

const index = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 978 388',
      fill: color,
      ...otherProps,
    },
    createElement(
      'g',
      {
        transform: 'matrix(7.83465,0,0,7.83465,-398.586,-488.321)',
      },
      createElement('path', {
        d: 'M142.662,103.442L146.265,94.331L156.668,94.331L151.73,80.51L157.905,64.896L175.59,111.852L162.548,111.852L159.526,103.442L142.662,103.442Z',
      }),
    ),
    createElement(
      'g',
      {
        transform: 'matrix(7.83465,0,0,7.83465,-398.586,-488.321)',
      },
      createElement('path', {
        d: 'M131.535,109.284L150.467,62.328L137.916,62.329L124.965,92.673L115.755,62.329L106.108,62.329L96.22,92.673L89.246,78.845L82.935,98.288L89.343,109.284L101.695,109.284L110.631,82.072L119.15,109.284L131.535,109.284Z',
      }),
    ),
    createElement(
      'g',
      {
        transform: 'matrix(7.83465,0,0,7.83465,-398.586,-488.321)',
      },
      createElement('path', {
        d: 'M62.789,93.166L70.52,93.166C72.862,93.166 74.947,92.905 76.776,92.382L78.775,86.223L84.363,69.007C83.938,68.333 83.452,67.694 82.905,67.093C80.036,63.917 75.838,62.33 70.312,62.33L50.875,62.33L50.875,109.286L62.789,109.286L62.789,93.166ZM73.022,73.132C74.143,74.26 74.703,75.77 74.703,77.66C74.703,79.566 74.21,81.077 73.225,82.194C72.144,83.435 70.155,84.056 67.257,84.056L62.789,84.056L62.789,71.441L67.29,71.441C69.991,71.441 71.902,72.004 73.022,73.132Z',
      }),
    ),
  )
}

index.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

index.defaultProps = {
  color: 'currentColor',
  size: '24',
}

export default index
