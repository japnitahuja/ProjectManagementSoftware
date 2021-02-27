import { UserActionTypes } from "./user.types"

export const signUpStart = (userCredentials) => {
    console.log(userCredentials)
    return({type: UserActionTypes.SIGN_UP_START,
        payload: userCredentials})
}

export const signUpSuccesful = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFail = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});