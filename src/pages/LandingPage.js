import React from 'react'
// import { Link } from "react-router-dom";
import LinkButton from '../components/LinkButton'
import logo from '../icon-above-font.png'
import hero from '../undraw_Social_networking_re_i1ex.svg'
export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center">
                <img src={logo} alt="logo" className="w-2/3" />
                <img src={hero} alt="conversation" className="w-4/5" />
                <div className="flex flex-col w-2/3 mt-14">
                    <LinkButton
                        to="/login"
                        text="Se connecter"
                        color="pink"
                        otherProps="text-red"
                    />
                    <LinkButton
                        to="/register"
                        text="S'inscrire"
                        color="pink"
                        otherProps="text-red"
                    />
                </div>
            </div>
        )
    }
}
