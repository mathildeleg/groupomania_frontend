import React from "react";

// create a component for inputs in forms (design-wise)
export default class Input extends React.Component {

    render() {
      const { label, type, name, ...otherProps } = this.props;
        
      return (
        <div className="flex flex-col justify-center p-4">
            <label className="text-red dark:text-pink-dark font-semibold lowercase pb-2">{label}</label>
            <input type={type} name={name} className="dark:bg-pink-dark border border-pink dark:border-blue rounded-xl h-10 focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent" {...otherProps} />
        </div>
      );
    }
  }