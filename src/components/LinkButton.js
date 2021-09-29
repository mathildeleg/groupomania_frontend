import React from 'react';
import { Link } from "react-router-dom";

export default class LinkButton extends React.Component {

    getColor = () => {
        switch (this.props.color) {
            case 'pink':
                return 'bg-pink';
            case 'red':
                return 'bg-red';
            default:
                return 'bg-white';
        }
    }

    render() {
      const {to, text} = this.props;
      return (
        <Link to={to} className={`${this.getColor()} rounded-lg text-red text-center font-semibold px-5 py-2 m-2`}>
          {text}
        </Link>
      );
    }
  }

