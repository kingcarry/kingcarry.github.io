import { useState, useEffect } from "react";

/**
 * @description 防抖
 * @see https://usehooks.com/useDebounce/
 * @param value 
 * @param delay 
 */
export default function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)
  
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)
  
        return () => {
          clearTimeout(handler)
        }
      },
      [value, delay],
    )
  
    return debouncedValue
  }