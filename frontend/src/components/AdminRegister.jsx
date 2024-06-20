/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'; // import axios
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles'


const AdminRegister = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	
	// const [confirmPassword, setConfirmPassword] = useState('')

	const handleRegister = async (e) => {
		e.preventDefault();  // Prevent default form submission

		try {
			const response = await axios.post('http://localhost:4000/api/v1/register/admin', {email, password});
			if (response.status === 200) {
				//Registration successful, redirect to amdin login
				window.location.href = '/admin-signIn';
			} else{
				//Handle registration errors
				console.error('Registration failed');
			}
		} catch (error) {
			console.error('Error during registration:', error);
		}
	};


  return (
	<AdminRegisterContainer>
		<h2>Admin Register</h2>
		<FormContainer onSubmit={handleRegister}>
			<InputField 
				type="email"
				placeholder = "Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required	
			/>
			<InputField 
				type="password"
				placeholder = "Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required	
			/>
			<SubmitButton onClick={(e) => handleRegister(e)}>Register</SubmitButton>
	
		</FormContainer>
	</AdminRegisterContainer>	
  )
}

export default AdminRegister
