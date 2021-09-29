import React, {Component } from 'react';
import { Link } from 'react-router-dom';
export default class Register extends Component {
    handleSubmit = async e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            avatar: this.avatar,
        };

        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userProfile: {email: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName, avatar: data.avatar},
            })
        });
        try {
            const data = await res.json();
            return data;
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return <div className="container bg-white">
                    <div className="bg-pink rounded-lg m-3 h-auto flex flex-col items-center">
                    <h1 className="text-red font-semibold flex justify-center pt-3">Votre profil</h1>
                        <form className="flex flex-col justify-center space-y-3 m-4">
                            <div className="flex flex-row space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Email</label>
                                <input type="email" name="email" className="border border-red rounded-lg" onChange={e => this.email = e.target.value} />
                            </div>
                            <div className="flex flex-row space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Mot de passe</label>
                                <input type="password" name="password" className="border border-red rounded-lg"  onChange={e => this.password = e.target.value}/>
                            </div>
                            <div className="flex flex-row space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Prénom</label>
                                <input type="text" name="firstName" className="border border-red rounded-lg" onChange={e => this.firstName = e.target.value} />
                            </div>
                            <div className="flex flex-row space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Nom</label>
                                <input type="text" name="lastName" className="border border-red rounded-lg" onChange={e => this.lastName = e.target.value} />
                            </div>
                            <div className="flex flex-row space-x-4 justify-center">
                                <label className="text-red font-semibold lowercase">Avatar</label>
                                <input type="url" name="avatar" className="border border-red rounded-lg" onChange={e => this.avatar = e.target.value} />
                            </div>
                            <Link className="bg-white rounded-lg text-red font-semibold w-2/3" onSubmit={this.handleSubmit}>S'inscrire</Link>
                            <Link className="bg-white rounded-lg text-red font-semibold w-2/3" to={'/login'}>Se connecter</Link>
                        </form>
                    </div>
                </div>
    }
}