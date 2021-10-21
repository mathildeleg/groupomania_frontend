import React from 'react'
// import { Link } from "react-router-dom";
import LinkButton from '../components/LinkButton'
import logo from '../icon-landingpage.svg'
import hero from '../undraw_Social_networking_re_i1ex.svg'
export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="flex flex-col lg:flex-row h-screen items-center justify-around m-4 lg:justify-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center lg:self-end">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full flex items-center md:h-96"
                        />
                    </div>
                    <img
                        src={hero}
                        alt="conversation"
                        className="w-4/5 lg:w-11/12 lg:ml-16"
                    />
                </div>
                <div className="flex flex-col w-2/3 lg:w-1/4 lg:mr-16 lg:mt-10">
                    <LinkButton
                        to="/login"
                        text="Se connecter"
                        color="pink"
                        textColor="red"
                    />
                    <LinkButton
                        to="/register"
                        text="S'inscrire"
                        color="pink"
                        textColor="red"
                    />
                </div>
            </div>
        )
    }
}
