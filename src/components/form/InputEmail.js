import React from "react";
import Input from "./Input";

// create a component that uses input in forms for email

export default class InputEmail extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='Email' type='email' name='email' { ...otherProps }/>
      );
    }
  }