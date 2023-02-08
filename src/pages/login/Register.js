import React, { useState } from "react";


export const Register = (props) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [name, setName] = useState('');
	
		const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	}

	return(
			<div className="auth-form-container">
			<h2>Register</h2>
		<form className="register-form" onSubmit={handleSubmit}>
			<label for="name">full name</label>
			<input value={name} name="name" id="name" placeholder="firstname lastname" />

			<label for="email">email</label>
			<input value={email} type="email" placeholder="user@mail.com" name="email"/>

			<label for="password">password</label>
			<input value ={pass} type="password" placeholder="**********" name="password"/>

			<button type="submit">Login</button>
		</form>
		<button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here</button>
		</div>
	)
}