import { useState } from 'react';
import  axios  from 'axios';
const projectID = '6fdda198-f291-49b5-8680-a6cc8320e1a2';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {

        e.preventDefault();
        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });

           localStorage.setItem( 'username', username);
           localStorage.setItem( 'password', password);
           window.location.reload();
           setError('');

        }catch (error){
            setError('Oops, Incorrect Credentials.');

        }

    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">CHATbox</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>START CHATTING</span>
                        </button>

                    </div>
                    
                </form>
                <h1>{error}</h1>
            </div>  
        </div>
    )
}
export default LoginForm;