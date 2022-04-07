import React, { useState } from "react";
import { addemail, addpassword, user, userid } from "./redux/dataActions";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase";

export default function () {
  const auth = getAuth();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const [hasAccount, setHasAccount] = useState(false);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(user(userCredential.user));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(user(userCredential.user));
      })
      .catch((error) => {
        alert(error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(userid(user.uid));
    } else {
      console.log("email not found");
    }
  });

  return (
    <div className="Bgcontainer w-50 mx-auto mt-5 text-center">
      <div className="flex-column pt-5">
        <div className="w-75 mx-auto flex-column">
          <div className="mx-auto blockquote">Email :</div>
          <input
            type="email"
            className="w-75 mx-auto p-2 Bginput text-center blockquote"
            onChange={(e) => dispatch(addemail(e.target.value))}
          />
        </div>
        <div className="w-75 mx-auto flex-column">
          <div className="mx-auto blockquote">Password :</div>
          <input
            type="password"
            className="w-75 mx-auto p-2 Bginput text-center blockquote"
            onChange={(e) => dispatch(addpassword(e.target.value))}
          />
        </div>
        {!hasAccount ? (
          <div className="d-flex flex-column">
            <div className="mx-auto">
              <button className="btn btn-secondary" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            <div className="mx-auto my-3">
              already have account?
              <button
                className="btn btn-secondary"
                onClick={() => setHasAccount(true)}
              >
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div className="mx-auto">
              <button className="btn btn-secondary" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="mx-auto my-3">
              Dont Have An Account?
              <button
                className="btn btn-secondary"
                onClick={() => setHasAccount(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
