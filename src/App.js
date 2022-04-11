import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userid, useremail } from "./components/redux/dataActions";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userid(user.uid));
        dispatch(useremail(user.email));
      } else {
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;
