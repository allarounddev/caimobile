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
      d="M136.02 3.61c0 11.27-.04 22.41.01 33.54.05 10.25 4.16 14.33 14.4 14.35 11.12.02 22.24 0 33.92 0 .13 2.3.34 4.24.34 6.18.02 25.13.04 50.26 0 75.39-.02 17.95-9.84 27.63-27.99 27.64-25.74.02-51.48.02-77.23 0-18.11-.02-27.68-9.63-27.69-27.84-.02-34.05-.02-68.1 0-102.15.01-18.52 9.52-27.91 28.24-27.91 18.04 0 36.08.06 54.11.11.36 0 .73.25 1.87.68Z"
      fill="#000"
      strokeWidth="0px"
    />
    <Path
      d="M15.27 99.3c0-15.62-.01-31.24.01-46.86 0-2.02-.02-4.09.36-6.06.84-4.42 4.17-7.26 8.12-6.59 2.99.5 6.02 3.45 8.02 6.08 1.23 1.62.73 4.69.73 7.1.04 30.02 0 60.04.03 90.07.02 22.5 13.92 36.26 36.54 36.27 22.11 0 44.23-.04 66.34.05 2.58.01 5.77-.04 7.57 1.35 2.29 1.77 4.74 5 4.73 7.59 0 2.59-2.57 5.61-4.78 7.59-1.4 1.25-4.2 1.28-6.37 1.29-23.33.08-46.66.3-69.99-.01-29.09-.4-50.97-22.57-51.29-51.62-.17-15.41-.03-30.83-.03-46.25ZM150 38V5.8c10.73 10.75 21.58 21.63 32.13 32.2H150Z"
      fill="#000"
      strokeWidth="0px"
    />
  </Svg>
)
export default SvgComponent