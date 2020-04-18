import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../from-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {  auth, signInWithGoogle  } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '' , password: ''})
    }

    handleChange = async event =>  {
        const {value, name} = event.target;
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch(error) {
            console.log(error)
        }
        this.setState({[name]: value })
    };

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput handleChange={this.handleChange} label="email" name="email" type="email" value={this.state.email} required/>
                  
                    
                    <FormInput handleChange={this.handleChange} label="password" name="password" type="password" value={this.state.password} required/>
                   
                    <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
                </form>
            </div>
        )
    }
}

export default SignIn;