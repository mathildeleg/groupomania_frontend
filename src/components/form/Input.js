import React from "react";

export default class Input extends React.Component {

    render() {
      const { label, type, name, ...otherProps } = this.props;
        
      return (
        <div className="flex flex-col space-x-4 justify-center p-4">
            <label className="text-red font-semibold lowercase pb-2 pl-4">{label}</label>
            <input type={type} name={name} className="border border-pink rounded-xl h-10 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent" {...otherProps} />
        </div>
      );
    }
  }