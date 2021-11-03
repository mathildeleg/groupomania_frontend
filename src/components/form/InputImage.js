import React from "react";
import Input from "./Input";

// create a component that uses input in forms for url

export default class InputImage extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='image' type='url' name='image' { ...otherProps }/>
      );
    }
  }