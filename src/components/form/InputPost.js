import React from "react";
import Input from "./Input";

// create a component that uses input in forms for post

export default class InputPost extends React.Component {
    render() {
        const { ...otherProps } = this.props;
        
        return (
        <Input label='Post' type='text' name='post' { ...otherProps }/>
      );
    }
}