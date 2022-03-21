import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentsFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentsFromAuth(response.user);
        }
    }, [])

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentsFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGooglePopupUser}>
                Sign In With Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button>
        </div>
    )
}

export default SignIn;