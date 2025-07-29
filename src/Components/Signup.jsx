import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import asset1 from '../assets/asset1.png';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigtate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     Axios.post('http:localhost:3000/auth/signup', {
    //         username, 
    //         email, 
    //         password
    //     }).then(response => {
    //         if(response.data.status) {
    //             navigtate('/login')
    //         } 
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    return (
        <div className="split-container">
            <div className='sign-up-container'>
                <form className='sign-up-form'>
                    <h2>Sigup</h2>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        autoComplete="off" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        placeholder="********" 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                    <p>Have an account?</p> <Link to="/login">Login</Link>
                </form>
            </div>
             <div className="image-container">
                <img 
                src={asset1}
                alt="Decorative" 
                className="auth-image"
                />
            </div>

        </div>

        
    )
}

export default Signup 