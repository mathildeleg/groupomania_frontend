import React from "react";
import Input from "./Input";

export default class InputEmail extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='Email' type='email' name='email' { ...otherProps }/>
      );
    }
  }