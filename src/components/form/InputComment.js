import React from "react";
import Input from "./Input";

export default class InputComment extends React.Component {
    render() {
        const { ...otherProps } = this.props;
        
        return (
        <Input label='Commentaire' type='text' name='comment' { ...otherProps }/>
      );
    }
}