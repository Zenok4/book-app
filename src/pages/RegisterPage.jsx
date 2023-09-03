import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

async function registerUser(e){
        e.preventDefault()

        try{
            await axios.post('/register', {
                name,
                email,
                password,
            })
            alert('User registration successful. Now you can login')
        }
        catch(e){
            alert('User registration failed. Please try again')
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Regiter</h1>
                <form className="max-w-lg mx-auto" onSubmit={registerUser}>
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder = "Enter your email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder = "Enter your password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="primary">Regiter</button>
                    <div className="text-center py-2 text-gray-500">
                        Already Member? <Link className="underline text-black" to={"/login"}>
                            Login
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default RegisterPage;