import { useState, useEffect, useRef } from 'react'

/**
 * @description 节流
 * @see https://github.com/bhaskarGyan/use-throttle/blob/master/src/index.js
 * @param value 
 * @param limit 
 */
export default function useThrottle<T>(value: T, limit = 333) {
    const [throttledValue, setThrottledValue] = useState(value)
    const lastRan = useRef(Date.now())

    useEffect(
        () => {
            const handler = setTimeout(
                () => {
                    if (Date.now() - lastRan.current >= limit) {
                        setThrottledValue(value)
                        lastRan.current = Date.now()
                    }
                },
                limit - (Date.now() - lastRan.current)
            );

            return () => {
                clearTimeout(handler)
            }
        },
        [value, limit]
    )

    return throttledValue
}