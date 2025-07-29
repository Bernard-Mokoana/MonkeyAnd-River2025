import React from 'react'

const Login = () => {
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
        <div className='sign-up-container'>
            <form className='sign-up-form'>
                <h2>Login</h2>

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

                <button type="submit">Login</button>
                <p>Have an account?</p> <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default Login