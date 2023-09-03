import { useCallback, useEffect, useState } from 'react'

/** 切り替えのインターバル */
const INTERVAL = 3_000

/**
 * 渡された配列の要素を1秒ごとに返却する。
 * 無限ループする。
 */
const useSlider = (args: readonly unknown[]) => {
  if (args.length === 0) return null

  const [slider, setSlider] = useState<unknown>(args[0])
  let sliderIndex = 0

  const _callback = useCallback(() => {
    setSlider(args[sliderIndex])
    if (sliderIndex < args.length - 1) return sliderIndex++
    return (sliderIndex = 0)
  }, [])

  useEffect(() => {
    const inter = setInterval(_callback, INTERVAL)
    return () => clearInterval(inter)
  }, [])

  return slider
}

export default useSlider
