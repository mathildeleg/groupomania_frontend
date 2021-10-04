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


    render() {
      const { text, ...otherProps } = this.props;

      return (
        <button className={`${this.getColor()} rounded-xl text-white bg-red text-center font-semibold px-5 py-2 m-2`} {...otherProps}>
          {text}
        </button>
      );
    }
  }

