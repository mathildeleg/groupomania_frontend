import React from 'react'

export default class Post extends React.Component {
    render() {
        const { text, user, date } = this.props

        return (
            <div className="container flex bg-pink">
                <div className="container rounded-lg bg-white m-5 p-4">
                    <div className="flex flex-col justify-start pl-4">
                        <div className="text-red">{user}</div>
                        <div className="text-xs lowercase">Il y a {date}</div>
                    </div>
                    <div className="flex justify-center">{text}</div>
                    <div className="flex justify-end pr-4">heart</div>
                </div>
            </div>
        )
    }
}
