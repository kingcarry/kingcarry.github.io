import { useRef, useEffect } from "react";

/**
 * @description 缓存上一次render时的值
 * @param value 
 */
export default function usePrevious<T>(value: T) {
    const ref = useRef<T>()

    useEffect(
        () => {
            ref.current = value;
        },
        [value],
    )

    return ref.current
}