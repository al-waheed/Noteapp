import { useContext, createContext, useEffect, useState } from 'react';

// Import the necessary functions and variables from the Firebase authentication module and our Firebase configuration
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from "../firebase";

// Create a new context object using the createContext() function
export const AuthContext = createContext();

// Define a new component that will wrap the rest of the app and provide authentication functionality
export const AuthContextProvider = ({ children }) => {

  // Define a new state variable called 'user' and initialize it to an empty object
  const [user, setUser] = useState({});

  // Define a function called 'googleSignIn' that will initiate the Google sign-in flow when called
  // Create a new instance of the GoogleAuthProvider class
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

  // Define a function called 'logOut' that will sign the user out of their Firebase account when called
  // Call the signOut() function from the Firebase authentication module, passing in the 'auth' variable as an argument
  const logOut = () => {
    signOut(auth)
  }

  // Use the useEffect() hook to listen for changes in the user's authentication state
  // Call the onAuthStateChanged() function from the Firebase authentication module, passing in the 'auth' variable and a callback function that will be called whenever the user's authentication state changes
  // Set the 'user' state variable to the current user object
  // Log the current user object to the console
  // Return a cleanup function that will unsubscribe from the onAuthStateChanged() listener when the component unmounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Render the AuthContext.Provider component and pass in an object with the 'googleSignIn', 'logOut', and 'user' functions/variables as values
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define a new component called 'UserAuth' that will allow other components to access the 'googleSignIn', 'logOut', and 'user' functions/variables from the AuthContextProvider
// Use the useContext() hook to access the current value of the AuthContext object
export const UserAuth = () => {
  return useContext(AuthContext);
};
