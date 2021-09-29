import React from "react";
import Input from "./Input";

export default class InputPassword extends React.Component {
    render() {
        const { ...otherProps } = this.props;

      return (
        <Input label='Mot de passe' type='password' name='password' {...otherProps}/>
      );
    }
  }