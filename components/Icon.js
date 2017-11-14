import Slider from '../static/icon-slider.svg'
import Ruler from '../static/icon-ruler.svg'
import Wind from '../static/icon-wind.svg'

const icons = {
  slider: Slider,
  ruler: Ruler,
  wind: Wind,
}

export default function Icon (props) {
  return icons[props.name]()
}
