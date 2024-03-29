import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

export const initialDimensions = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height)
}

export function useScreenDimensions () {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  useEffect(() => {
    const handleChange = () => {
      setWidth(initialDimensions.width)
      setHeight(initialDimensions.height)
    }

    Dimensions.addEventListener('change', handleChange)
    return () => {
      Dimensions.removeEventListener('change', handleChange)
    }
  })
  return { width, height }
}
