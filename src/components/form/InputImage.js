import React from "react";
import Input from "./Input";

export default class InputImage extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='image' type='url' name='image' { ...otherProps }/>
      );
    }
  }