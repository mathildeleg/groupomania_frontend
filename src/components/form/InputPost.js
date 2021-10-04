import React from "react";
import Input from "./Input";

export default class InputPost extends React.Component {
    render() {
        const { ...otherProps } = this.props;
        
        return (
        <Input label='Post' type='text' name='post' { ...otherProps }/>
      );
    }
}