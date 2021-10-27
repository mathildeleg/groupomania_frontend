import React from 'react'
import { Link } from 'react-router-dom'

export default class LinkButton extends React.Component {
    getColor = () => {
        switch (this.props.color) {
            case 'pink':
                return 'bg-pink dark:bg-pink-dark'
            case 'red':
                return 'bg-red dark:bg-red-dark'
            default:
                return 'bg-white dark:bg-pink-dark'
        }
    }

    getTextColor = () => {
        switch (this.props.textColor) {
            case 'pink':
                return 'text-pink dark:text-pink-dark'
            case 'red':
                return 'text-red dark:text-red-dark'
            case 'black':
                return 'text-black dark:text-blue'
            default:
                return 'text-white dark:text-pink-dark'
        }
    }

    getRingColor = () => {
        switch (this.props.ring) {
            case 'pink':
                return 'focus:ring-pink dark:focus:ring-pink-dark'
            case 'red':
                return 'focus:ring-red dark:focus:ring-red-dark'
            case 'black':
                return 'focus:ring-black'
            default:
                return 'focus:ring-white dark:focus:ring-blue'
        }
    }

    render() {
        const { to, text } = this.props
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
