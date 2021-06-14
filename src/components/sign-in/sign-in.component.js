import './sign-in.style.scss'
import React, { Component } from 'react'
import CustomButton from "../custom-button/custom-button.component"
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email or password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>
                    
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                        Sign In With Google{' '}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
