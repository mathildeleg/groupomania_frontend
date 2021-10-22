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
        const { to, text, otherProps } = this.props
        return (
            <Link
                to={to}     
                className={`${this.getColor()} ${this.getTextColor()} ${this.getRingColor()} rounded-xl text-center font-semibold px-5 py-2 m-2 focus:outline-none focus:ring-2 focus:border-transparent`}
            >
                {text}
            </Link>
        )
    }
}
