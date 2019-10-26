import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';



const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    };        

    return (
        <section className="signup">
            <section className="signup__container">
                <h2>Sign up</h2>
                <form action="" className="signup__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Name" 
                        className="input" 
                        onChange={handleInput}
                    />
                    <input 
                        name="email"
                        type="text" 
                        placeholder="E-mail" 
                        className="input" 
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        className="input" 
                        onChange={handleInput}
                    />
                    <button className="button">Sign me up</button>
                </form>
                <section className="signup__container--social-media">
                    <div><img src={googleIcon} alt="Google" className="logo" />Sign up with Google</div>
                    <div><img src={twitterIcon} alt="Twitter" className="logo" />Sign up with Twitter</div>
                </section>
            </section>
        </section>

    );
};

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);