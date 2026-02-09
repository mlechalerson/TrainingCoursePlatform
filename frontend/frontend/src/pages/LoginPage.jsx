import { useEffect, useState } from 'react'
import { useAuth } from '../Authentication'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(username, password);

        if(result.success) {
          return <span>Zalogowano</span>
        }
    }

  return (
    <>
    <h2>Log in to view the website</h2>
      <form onSubmit={handleSubmit}>
        Login: <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type='submit' value='Log in'/>
      </form>
    </>
  )
}

export default LoginPage