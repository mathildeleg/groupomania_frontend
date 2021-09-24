import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    handleSubmit = async e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password,
        }

        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email, 
                password: data.password,
            })
        });
        try {
            const data = await res.json();
            localStorage.setItem("token", data.token);
        } catch(error) {
            console.log(error);
        }

    }

    render() {
        return <div className="container bg-white flex flex-col h-screen">
                    <div className="bg-pink rounded-lg m-3 h-auto flex flex-col items-center">
                        <form onSubmit={this.handleSubmit}  className="flex flex-col justify-center space-y-3 m-5">
                            <div className="flex flex-col space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Email</label>
                                <input type="email" name="email" className="border border-red rounded-lg" onChange={e => this.email = e.target.value} />
                            </div>
                            <div className="flex flex-col space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Mot de passe</label>
                                <input type="password" name="password" className="border border-red rounded-lg" onChange={e => this.password = e.target.value} />
                            </div>
                            <Link className="bg-white rounded-lg text-red font-semibold w-2/3" to={'/'}>Se connecter</Link>
                        </form>
                    </div>
                </div>
    }
}