import { AuthorizeState, AuthorizeActions, LOGIN, LOGOUT } from "./types";

const initialState: AuthorizeState = {  // TODO: 首次加载，会先从本地进行同步
    isLogin: false,
    token: undefined,
    userProfile: undefined,
}

export default function authorizeReducer(state = initialState, action: AuthorizeActions): AuthorizeState {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
                isLogin: true,
            }
        case LOGOUT:
            return {
                isLogin: false,
                token: undefined,
                userProfile: undefined,
            }
        default:
            return state
    }
}