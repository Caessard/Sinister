import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form); 
        props.history.push('/')
    }

    return (
        <section className="login">
            <section className="login__container">
                <h2>Log in</h2>
                <form action="" className="login__container--form" onSubmit={handleSubmit}>
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
                    {/* <Link to="/"> */}
                        <button className="button">Log in</button>
                    {/* </Link> */}
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox" /> Remember me
                        </label>
                        <a href="/">Forgot password?</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} alt="Google" className="logo" />Log in with Google</div>
                    <div><img src={twitterIcon} alt="Twitter" className="logo" />Log in with Twitter</div>
                </section>
                <p className="login__container--register">
                    Don't have an account?  
                    <Link to="./Register">
                        Sign up
                    </Link> 
                </p>   
            </section>
        </section>
    );
} 

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);