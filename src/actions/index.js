import { SIGN_IN, SIGN_OUT } from './type';
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


