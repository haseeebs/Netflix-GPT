// Library imports
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Absolute imports
import { auth } from "./utils/firebase";

// Relative imports
import Header from "./components/Header";
import { addUser, removeUser } from "./slices/userSlice";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');

      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
