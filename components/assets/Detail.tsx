import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 200 200"
    {...props}
  >
    <Rect
      width={183.15}
      height={196}
      x={9.08}
      y={2}
      rx={40.97}
      ry={40.97}
      strokeWidth= "0px"
      fill= "#000"
    />
    <Path
      d="M165.3 96.5c0 22.65-6.46 40-19.34 52.05-12.88 12.05-31.52 18.06-55.88 18.06H51.1V28.99h43.22c22.46 0 39.91 5.94 52.34 17.8 12.43 11.86 18.64 28.44 18.64 49.71Zm-30.33.74c0-29.56-13.05-44.34-39.17-44.34H80.28v89.61h12.53c28.11 0 42.16-15.1 42.16-45.27Z"
      fill="#fff"
      strokeWidth="0px"
    />
  </Svg>
)
export default SvgComponent
