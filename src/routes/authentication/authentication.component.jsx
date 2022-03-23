import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentsFromAuth, signInAuthUserWithEmailAndPassoword} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';


import './authentication.styles.scss';


const Authentication = () => {
    return (
        <div className='sign-in container'>
            <h2>Sign In Page</h2>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;