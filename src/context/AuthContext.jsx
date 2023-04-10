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
  const googleSignIn = () => {
    // Create a new instance of the GoogleAuthProvider class
    const provider = new GoogleAuthProvider();
    // Call the signInWithRedirect() function from the Firebase authentication module, passing in the 'auth' variable and the 'provider' variable as arguments
    signInWithRedirect(auth, provider)
  };

  // Define a function called 'logOut' that will sign the user out of their Firebase account when called
  const logOut = () => {
    // Call the signOut() function from the Firebase authentication module, passing in the 'auth' variable as an argument
    signOut(auth)
  }

  // Use the useEffect() hook to listen for changes in the user's authentication state
  useEffect(() => {
    // Call the onAuthStateChanged() function from the Firebase authentication module, passing in the 'auth' variable and a callback function that will be called whenever the user's authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Set the 'user' state variable to the current user object
      setUser(currentUser);
      // Log the current user object to the console
      console.log('User', currentUser)
    });
    // Return a cleanup function that will unsubscribe from the onAuthStateChanged() listener when the component unmounts
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
export const UserAuth = () => {
  // Use the useContext() hook to access the current value of the AuthContext object
  return useContext(AuthContext);
};
