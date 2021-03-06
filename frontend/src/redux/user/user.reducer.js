import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  role: null,
  permission: null,
  username: null,
  _id: null,
  signUpStart: false,
  signUpSuccessful: false,
  signUpFail: false,
  signInStart: false,
  signInSuccessful: false,
  signInFail: false,
  errorMessage: undefined,
  message: null,

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        signUpStart: true,
        signUpFail: false,
        signUpSuccessful: false,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStart: false,
        signUpSuccessful: true,
        signInSuccessful: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        //role: action.payload.role,
        username: action.payload.username,
        //permission: action.payload.permission,
        _id:action.payload._id,
        message: "SIGNED IN SUCCESSFULLY!",
      };
    case UserActionTypes.TASK_OWNER_TRADE_PARTNER_SIGN_UP_SUCCESS:
      return {
        message: action.payload,
        signUpStart: false,
        signUpSuccessful: true,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpStart: false,
        signUpFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        signInStart: true,
      };
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        signInStart: false,
        signInSuccessful: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        role: action.payload.role,
        username: action.payload.username,
        _id:action.payload._id,
        // permission: action.payload.permission,
        message: "SIGNED IN SUCCESSFULLY!",
        errorMessage: null
      };
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        message: action.payload,
        signInSuccessful: false,
        signInFail: true,
        errorMessage: action.payload,
      };
    case UserActionTypes.USER_SIGN_OUT:
      return {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        role: null,
        username: null,
        _id: null,
        signUpStart: false,
        signUpSuccessful: false,
        signUpFail: false,
        signInStart: false,
        signInSuccessful: false,
        signInFail: false,
        errorMessage: undefined,
        message: null,
      };
    case UserActionTypes.SET_USER_ROLE:
      console.log(action.payload, 'reducer permission console log')
      return{
        ...state, 
        permission: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
