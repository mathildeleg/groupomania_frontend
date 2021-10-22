import React from 'react';

export default class Button extends React.Component {

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

    getRingColor = () => {
      switch (this.props.textColor) {
          case 'pink':
              return 'focus:ring-pink'
          case 'red':
              return 'focus:ring-red'
          case 'black':
              return 'focus:ring-black'
          default:
              return 'focus:ring-white'
      }
  }

    render() {
      const { text, ...otherProps } = this.props;

      return (
        <button className={`${this.getColor()} ${this.getRingColor()} focus:outline-none focus:ring-2 focus:border-transparent rounded-xl text-white bg-red text-center font-semibold px-5 py-2 m-2`} {...otherProps}>
          {text}
        </button>
      );
    }
  }

