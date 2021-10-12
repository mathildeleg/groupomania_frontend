import React from 'react'
import { timeAgo } from '../helpers/timeAgo'
import LinkButton from './LinkButton'

export default class Comment extends React.Component {
    render() {
        const { date, comment, author, commentId, postId } = this.props
        const minutes = timeAgo(date)

        return (
            <div className="flex bg-pink justify-end">
                <div className="container rounded-xl bg-white w-3/4 m-5 p-4">
                <div className="flex flex-row justify-between content-start">
                        <div className="flex flex-col justify-start pl-4">
                            <div className="text-red">{author}</div>
                            <div className="text-xs pl-8 lowercase">
                                {minutes}
                            </div>
                        </div>
                        <div>
                            <LinkButton
                                to={`/forum/post/${postId}/comment/${commentId}`}
                                text="..."
                                textColor="black"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center p-3">
                        <div className="flex pl-4">{comment}</div>
                    </div>
                </div>
            </div>
        )
    }
}
