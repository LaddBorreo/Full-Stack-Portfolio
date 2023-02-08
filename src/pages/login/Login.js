import React, { useState } from "react";
export const Login = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	}

	return (
		<div className="auth-form-container">
			<h2>Login</h2>
		<form className="login-form" onSubmit={handleSubmit}>
			<label for="email">email</label>
			<input value={email} type="email" placeholder="user@mail.com" name="email"/>

			<label for="password">password</label>
			<input value ={pass} type="password" placeholder="**********" name="password"/>

			<button type="submit">Login</button>
		</form>
		<button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button>
		</div>
	)
}