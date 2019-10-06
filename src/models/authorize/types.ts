type UserProfileType = any   // TODO: 定义用户资料

export interface AuthorizeState {
    isLogin: boolean,
    token?: string,
    userProfile?: UserProfileType,
}

export const LOGIN = 'authorize/LOGIN'
export const LOGOUT = 'authorize/LOGOUT'

interface LoginAction {
    type: typeof LOGIN,
    payload: {
        token: string,
        userProfile: UserProfileType,
    },
}

interface LogoutAction {
    type: typeof LOGOUT,
}

export type AuthorizeActions = LoginAction | LogoutAction 