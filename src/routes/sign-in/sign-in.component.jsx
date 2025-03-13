import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth, 
    signInWithGooglePopup,
    signInwWithGoogleRedirect,  
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     // console.log(response);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

    // useEffect(() => {
    //     const fetchRedirectResult = async () => {
    //       try {
    //         const response = await getRedirectResult(auth);
    //         // console.log(response);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.auth);
    //         }
    //       } catch (error) {
    //         console.error("Error fetching redirect result:", error);
    //       }
    //     };
    
    //     fetchRedirectResult();
    //   }, []);
    
    useEffect(() => {
        const fetchRedirectResult = async () => {
          try {
            const response = await getRedirectResult(auth);
            console.log("Redirect Result", response); 
            if (response) {
              const { user } = response;
              console.log("Redirect User:", user);
              await createUserDocumentFromAuth(user);
            }
          } catch (error) {
            console.error("Error fetching redirect result:", error);
          }
        };
    
        fetchRedirectResult();
      }, []);
      
    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup(); 
        // console.log(response); 
        const { user } = await signInWithGooglePopup(); 
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    // const logGoogleRedirectUser = async() => {
    //     const { user } = await signInwWithGoogleRedirect(); 
    //     console.log({ user });
    // }

    
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={logGoogleRedirectUser}>
                Sign in with Google Redirect
            </button> */}
            {/* <button onClick={signInwWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
             {/* <button onClick={() => signInwWithGoogleRedirect()}>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm/>
        </div>
    )
}


export default SignIn; 