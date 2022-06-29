import SvgIcon from './svg-index.vue'
const svgRequire = require.context('../svg图标', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
const installIcons = (instance) => {
  instance.component('SvgIcon', SvgIcon)
}

export default installIcons
