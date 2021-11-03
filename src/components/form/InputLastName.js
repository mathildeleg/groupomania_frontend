import React from "react";
import Input from "./Input";

// create a component that uses input in forms for last name


export default class InputLastName extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='nom' type='text' name='lastName' { ...otherProps }/>
      );
    }
  }