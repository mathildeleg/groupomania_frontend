import React from "react";
import Input from "./Input";

// create a component that uses input in forms for comment

export default class InputComment extends React.Component {
    render() {
        const { ...otherProps } = this.props;
        
        return (
        <Input label='Commentaire' type='text' name='comment' { ...otherProps }/>
      );
    }
}