import { Breakpoint } from '../Hooks/useBreakpoint'

export function dataViewToScreenSize (data, breakpoint, smallBreakpointIndices, mediumBreakpointIndices) {
  switch (breakpoint) {
    case Breakpoint.SMALL:
      return data.filter((_, i) => smallBreakpointIndices.indexOf(i) !== -1)
    case Breakpoint.MEDIUM:
      return data.filter((_, i) => mediumBreakpointIndices.indexOf(i) !== -1)
    default:
      return data
  }
}

dataViewToScreenSize.defaultProps = {
  breakpoint: Breakpoint,
  data: [],
  mediumBreakpointIndices: [],
  smallBreakpointIndices: []
}
