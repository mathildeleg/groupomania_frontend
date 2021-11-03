import React from "react";
import Input from "./Input";

// create a component that uses input in forms for first name

export default class InputFirstName extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='prénom' type='text' name='firstName' { ...otherProps }/>
      );
    }
  }