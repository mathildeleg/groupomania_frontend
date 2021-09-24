import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    async componentDidMount() {
        const token = localStorage.getItem('token');

        const res = await fetch('http://localhost:3000/api/forum/1/post', {
            method: 'GET',
            headers: {
                'Authorization': `token ${token}`,
            },
        });
        try {
            const forum = await res.json();
            console.log(forum);
            return forum;
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return <div className="container flex justify-center">
                    <div className="flex flex-col">
                        <Link to={"/login"} className="rounded-lg bg-pink text-red text-center font-semibold px-5 py-2 m-2">Se connecter</Link>
                        <Link to={"/register"} className="rounded-lg bg-pink text-red text-center font-semibold px-5 py-2 m-2">S'inscrire</Link>
                    </div>
                </div>
    }
}