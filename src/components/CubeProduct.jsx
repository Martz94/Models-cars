import PropTypes from 'prop-types'

const colors = {
  "Khaki": {main:"#C3AF91", light:"#e3d8c7", dark: "#b1905f"},
  "Yellow": {main:"#E6CC00", light:"#fff49c", dark: "#b9a506"},
  "Purple": {main:"#A020F0", light:"#d899ff", dark: "#7108b3"},
  "Fuscia": {main:"#FF00FF", light:"#ff9fff", dark: "#d30ed3"},
  "Pink": {main:"#FFC0CB", light:"#ffe9ec", dark: "#f190a1"},
  "Teal": {main:"#008080", light:"#24c5c5", dark: "#025d5d"},
  "Blue": {main:"#0055b3", light:"#3c8de7", dark: "#05448b"},
  "Maroon": {main:"#260000", light:"#4b1212", dark: "#1a0101"},
  "Green": {main:"#1b840e", light:"#80cb77", dark: "#0e5904"},
  "Red": {main:"#e60634", light:"#ff7e99", dark: "#a50022"},
  "Turquoise": {main:"#33b3a6", light:"#8af9ee", dark: "#1b897e"},
  "Violet": {main:"#b14dff", light:"#d099fb", dark: "#8c28d9"},
  "Aquamarine": {main:"#318a83", light:"#7de3db", dark: "#19615b"},
  "Crimson": {main:"#580818", light:"#a9485b", dark: "#39020d"},
  "Puce": {main:"#cc8899", light:"#ffc5d4", dark: "#935162"},
  "Mauv": {main:"#854e74", light:"#e3add3", dark: "#5b314e"},
  "Orange": {main:"#ff6600", light:"#ffa96f", dark: "#bf4f04"},
  "Goldenrod": {main:"#b8860b", light:"#fdd060", dark: "#8f6703"},
  "Indigo": {main:"#7986cb", light:"#cdd5ff", dark: "#4957a5"},
}

const Icon = () => (
  <svg width="60px" height="60px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{opacity: .5}}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -8039.000000)" fill="currentColor">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M61.4155,7892 L57.3175,7892 C57.6215,7891.361 57.8215,7890.687 57.9205,7890 L61.9265,7890 C61.8415,7890.682 61.6755,7891.355 61.4155,7892 L61.4155,7892 Z M59.6565,7894.657 C58.1455,7896.168 56.1365,7897 53.9995,7897 C52.5695,7897 51.2015,7896.619 49.9965,7895.92 C50.3295,7895.968 50.6645,7896 50.9995,7896 C52.7685,7896 54.5345,7895.331 55.8945,7894 L60.2415,7894 C60.0605,7894.227 59.8665,7894.447 59.6565,7894.657 L59.6565,7894.657 Z M47.4645,7885.464 C48.4085,7884.52 49.6645,7884 50.9995,7884 C52.3355,7884 53.5915,7884.52 54.5355,7885.464 C56.4855,7887.414 56.4855,7890.586 54.5355,7892.536 C53.5915,7893.48 52.3355,7894 50.9995,7894 C49.6645,7894 48.4085,7893.48 47.4645,7892.536 C45.5145,7890.586 45.5145,7887.414 47.4645,7885.464 L47.4645,7885.464 Z M53.9995,7881 C56.1365,7881 58.1455,7881.832 59.6565,7883.343 C59.8665,7883.553 60.0605,7883.773 60.2415,7884 L55.8945,7884 C54.5345,7882.669 52.7685,7882 50.9995,7882 C50.6645,7882 50.3295,7882.032 49.9965,7882.08 C51.2015,7881.381 52.5695,7881 53.9995,7881 L53.9995,7881 Z M61.4155,7886 C61.6755,7886.645 61.8415,7887.318 61.9265,7888 L57.9205,7888 C57.8215,7887.313 57.6215,7886.639 57.3175,7886 L61.4155,7886 Z M61.0715,7881.929 C59.1185,7879.976 56.5595,7879 53.9995,7879 C51.4405,7879 48.8815,7879.976 46.9285,7881.929 C44.9765,7883.882 43.9995,7886.441 43.9995,7889 C43.9995,7889.224 44.0105,7889.448 44.0315,7889.671 C44.1875,7892.002 45.1475,7894.289 46.9285,7896.071 C48.8815,7898.024 51.4405,7899 53.9995,7899 C56.5595,7899 59.1185,7898.024 61.0715,7896.071 C64.9765,7892.166 64.9765,7885.834 61.0715,7881.929 L61.0715,7881.929 Z" id="dead_star-[#37]"></path>
            </g>
        </g>
    </g>
  </svg>
)

const CubeProduct = ({color}) => {
  return (
    <div className="cube-container">
        <div className="cube">
          <figure
            style={
              {
                background: `linear-gradient(320deg, ${colors[color].dark} 0%, ${colors[color].main} 30%, ${colors[color].light} 100%)`,
                border: `2px solid ${colors[color].main}`,
                color: colors[color].light
              }
            }
            className="side front"><Icon/></figure>
          <figure style={{background: colors[color]}} className="side back">2</figure>
          <figure
            style={
              {
                background: `linear-gradient(40deg, ${colors[color].dark} 0%, ${colors[color].main} 30%, ${colors[color].light} 100%)`,
                border: `2px solid ${colors[color].main}`,
                color: colors[color].light
              }
            }
            className="side left"><Icon/></figure>
          <figure style={{background: colors[color]}} className="side right">4</figure>
          <figure
            style={
              {
                background: `linear-gradient(230deg, ${colors[color].dark} 0%, ${colors[color].main} 30%, ${colors[color].light} 100%)`,
                border: `2px solid ${colors[color].main}`,
                color: colors[color].light
              }
            }
            className="side top"><Icon/></figure>
          <figure style={{background: colors[color], boxShadow: `0px 0px 30px rgba(0,0,0,.5)`}} className="side bottom">6</figure>
        </div>
      </div>
  )
}

CubeProduct.propTypes = {
  color: PropTypes.string.isRequired
}

export default CubeProduct