import React from "react";

export default class Errors extends React.Component {
    render() {
        const { errorText } = this.props;
      
        return (
        <div className="text-sm bg-pink dark:bg-pink-dark text-red dark:text-blue lowercase font-semibold flex justify-end pr-4 m-2">{errorText}</div>
      );
    }
  }