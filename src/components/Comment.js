import React from 'react'
import { timeAgo } from '../helpers/timeAgo'

export default class Comment extends React.Component {
    render() {
        const { date, comment, author } = this.props;
        const minutes = timeAgo(date)

        return (
            <div className="container flex bg-pink justify-end">
                <div className="container rounded-xl bg-white w-3/4 m-5 p-4">
                    <div className="flex flex-row justify-center p-3">
                        <div className="flex pl-4">
                            {comment}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                    <div className="text-red">{author}</div>
                    <div className="text-xs pl-8 lowercase">{minutes}</div>
                </div>
                </div>
            </div>
        )
    }
}
