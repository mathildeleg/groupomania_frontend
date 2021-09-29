import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return <div className="container flex justify-center">
                    <div className="flex flex-col">
                        <Link to={"/login"} className="rounded-lg bg-pink text-red text-center font-semibold px-5 py-2 m-2">Se connecter</Link>
                        <Link to={"/register"} className="rounded-lg bg-pink text-red text-center font-semibold px-5 py-2 m-2">S'inscrire</Link>
                    </div>
                </div>
    }
}