import React from "react";
import Input from "./Input";

// create a component that uses input in forms for password

export default class InputPassword extends React.Component {
    render() {
        const { ...otherProps } = this.props;

      return (
        <Input label='Mot de passe' type='password' name='password' {...otherProps}/>
      );
    }
  }