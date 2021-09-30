import React from "react";
import Input from "./Input";

export default class InputLastName extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='nom' type='text' name='lastName' { ...otherProps }/>
      );
    }
  }