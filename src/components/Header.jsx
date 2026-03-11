import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLogo, userIcon } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe(); 
  }, []); 
  //Unsubscribe when component unmounts
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        signOut(auth);
      })
      .catch((error) => {
        <h1>{error.message}</h1>;
        // An error happened.
      });
  };
  return (
    <div>
      <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black items-center w-full">
        <div className="flex flex-row items-center text-white gap-8">
          <img
            className="w-44"
            src={netflixLogo}
            alt="Netflix_logo"
          />
          <div>Home</div>
          <div>TV Shows</div>
          <div>Movies</div>
        </div>
        {user && (
          <div className="flex flex-row">
            <div className="flex flex-col p-2 m-2">
              <img
                className="mx-auto w-12 rounded-md"
                src={userIcon}
                alt="user-icon"
              />
              <span className="text-white font-bold text-sm text-center">
                {user.displayName}
              </span>
            </div>

            <button
              className="bg-red-600 rounded-md text-white font-bold p-2 bg-gradient-to-b from-red-600 to-red-800 h-10 self-center"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
