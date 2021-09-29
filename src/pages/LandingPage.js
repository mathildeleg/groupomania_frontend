import React from "react";
// import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

export default class LandingPage extends React.Component {
    render() {
      return (
        <div>
          <LinkButton to='/login' text="Se connecter" color='pink'/>
          <LinkButton to='/register' text="S'inscrire" color='pink'/>
        </div>
      );
    }
  }