import React from "react";

export default class Input extends React.Component {

    render() {
        const { label, type, name, ...otherProps } = this.props;
        
      return (
        <div className="flex flex-col space-x-4 justify-center">
            <label className="text-red font-semibold lowercase">{label}</label>
            <input type={type} name={name} className="border border-red rounded-lg" {...otherProps} />
        </div>
      );
    }
  }