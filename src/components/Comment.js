import React from 'react'
import { timeAgo } from '../helpers/timeAgo'
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
    render() {
        const { date, comment, author, commentId, postId } = this.props;
        const minutes = timeAgo(date)

        return (
            <div className="flex bg-pink justify-end">
            <Link to={`/forum/post/${postId}/comment/${commentId}`} className="container rounded-xl bg-white w-3/4 m-5 p-4">
                <div className="flex flex-row justify-center p-3">
                    <div className="flex pl-4">
                        {comment}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-end">
                    <div className="text-red">{author}</div>
                    <div className="text-xs pl-8 lowercase">{minutes}</div>
                </div>
            </Link>
            </div>
        )
    }
}
