import { all, call, put, takeLatest } from "redux-saga/effects";
import { signUpFail, signUpSuccesful } from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* signUp({ payload }) {
  console.log("Sign Up has started.");
  console.log(payload);

    try{
        let data = payload;
        console.log(JSON.stringify(data));
      
        let resp = yield fetch("http://127.0.0.1:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      
        console.log(resp);
        resp = yield resp.json();
        console.log(resp);
        const user = yield resp.user;
        const token = yield resp.token;
      
        console.log("user is", user);
        console.log("token is", token);
      
        if (resp.done) {
          //sign in function
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          yield put(signUpSuccesful(user));
        } else {
          yield put(signUpFail("Failed to sign up."));
        }
    }
        catch (error) {
            yield put(signUpFail(error));
          }

}


export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
