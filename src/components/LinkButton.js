import React from 'react'
import { Link } from 'react-router-dom'

export default class LinkButton extends React.Component {
    getColor = () => {
        switch (this.props.color) {
            case 'pink':
                return 'bg-pink'
            case 'red':
                return 'bg-red'
            default:
                return 'bg-white'
        }
    }

    getTextColor = () => {
        switch (this.props.textColor) {
            case 'pink':
                return 'text-pink'
            case 'red':
                return 'text-red'
            case 'black':
                return 'text-black'
            default:
                return 'text-white'
        }
    }

    render() {
        const { to, text, otherProps } = this.props
        return (
            <Link
                to={to}
                className={`${this.getColor()} ${this.getTextColor()} rounded-xl text-center font-semibold px-5 py-2 m-2 ${otherProps}`}
            >
                {text}
            </Link>
        )
    }
}
