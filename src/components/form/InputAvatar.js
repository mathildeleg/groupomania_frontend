import React from "react";
import Input from "./Input";

// create a component that uses input in forms for avatar
export default class InputAvatar extends React.Component {
    render() {
        const { ...otherProps } = this.props;
      
        return (
        <Input label='Avatar' type='url' name='avatar' { ...otherProps }/>
      );
    }
  }