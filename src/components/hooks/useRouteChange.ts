import { useEffect } from "react"
import { useLocation } from "react-router"

/**
 * @description 监听路由的变化
 * @example 用于路由级别的统计埋点；放在总路由的入口即可
 */
export default function useRouteChange() {
    let location = useLocation()

    useEffect(
        () => {
            // console.log('current-route', location)
        },
        [location],
    )
}