import { useCallback, useState, useEffect, useMemo } from 'react'

export default () => {
  const isClient = typeof window === 'object'
  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient]
  )
  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    if (!isClient) {
      return false
    }
    const handleResize = () => {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient])

  const isMobile = useMemo(() => windowSize.width < 480, [windowSize.width])
  const isDesktop = useMemo(() => windowSize.width >= 992, [windowSize.width])
  const isTablet = useMemo(() => !isMobile && !isDesktop, [isDesktop, isMobile])

  return { ...windowSize, isMobile, isDesktop, isTablet }
}
