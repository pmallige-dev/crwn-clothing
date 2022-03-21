import { signInWithGooglePopup, createUserDocumentsFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async (userDocRef) => {
        const { user } = await signInWithGooglePopup();
        userDocRef = await createUserDocumentsFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
        </div>
    )
}

export default SignIn;