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

export const taskOwnerAndTradePartnerSignUpSuccessful = (message) => ({
    type: UserActionTypes.TASK_OWNER_TRADE_PARTNER_SIGN_UP_SUCCESS,
    payload: message
})

export const signUpFail = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const signInStart = (userCredentials) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
})

export const signInSuccessful = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
})

export const signOut = () => ({
    type: UserActionTypes.USER_SIGN_OUT
})