import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  role: null,
  username: null,
  _id: null,
  signUpStart: false,
  signUpSuccesful: false,
  signUpFail: false,
  signInSuccessful: false,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        signUpStart: true,
        signUpFail: false,
        signUpSuccesful: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStart: false,
        signUpSuccesful: true,
        signInSuccessful:true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        role: action.payload.role,
        username: action.payload.username,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpStart: false,
        signUpFail: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
