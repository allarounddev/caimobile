import * as React from "react"
import Svg, { SvgProps, Defs, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 200 200"
    {...props}
  >
    <Defs></Defs>
    <Path
      d="m58.8 24.04-4.03 12.1H25.81C12.13 36.14 1 47.26 1 60.95v99.24C1 173.87 12.13 185 25.81 185h148.86c13.68 0 24.81-11.13 24.81-24.81V60.95c0-13.68-11.13-24.81-24.81-24.81h-28.96l-4.03-12.1a18.555 18.555 0 0 0-17.64-12.72H76.43c-8.02 0-15.12 5.12-17.64 12.72Zm41.44 49.31c20.55 0 37.22 16.66 37.22 37.22s-16.66 37.22-37.22 37.22-37.22-16.66-37.22-37.22 16.66-37.22 37.22-37.22Z"
      fill="#000"
      strokeWidth="0px"
    />
  </Svg>
)
export default SvgComponent
