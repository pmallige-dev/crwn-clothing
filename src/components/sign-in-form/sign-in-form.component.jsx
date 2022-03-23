import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";

import {
    createAuthuserWithEmailAndPassword,
    createUserDocumentsFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassoword
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassoword(email,password)
            console.log(response);
            resetFormFields();
        } catch (error) {

        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentsFromAuth(user);
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an Account?</h2>
            <span>Sign In with Your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;