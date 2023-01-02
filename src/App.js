import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebaseConfig";
import { login, logout } from "./features/slices/userSlice";
function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            dispalyName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
