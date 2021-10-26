import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../helpers/timeAgo'
import LinkButton from './LinkButton'
import LikePost from '../pages/Posts/LikePost'
import AuthContext from '../helpers/AuthProvider'

export default class Post extends React.Component {
    static contextType = AuthContext

    render() {
        const { profile } = this.context
        const {
            text,
            user,
            userId,
            date,
            comments,
            likes,
            image,
            commentsText,
            postId,
        } = this.props
        const minutes = timeAgo(date)

        return (
            <div className="container flex bg-pink dark:bg-blue">
                <div className="container flex flex-col rounded-xl bg-white dark:bg-pink-dark m-5 p-4 lg:mx-24">
                    <div className="flex flex-row justify-between content-start">
                        <div className="flex flex-col justify-start pl-4">
                            <div className="text-red dark:text-blue">{user}</div>
                            <div className="text-xs pl-8 lowercase">
                                {minutes}
                            </div>
                        </div>
                        {profile.isAdmin === true ||
                        profile.userId === userId ? (
                            <div>
                                <LinkButton
                                    to={`/forum/post/${postId}`}
                                    text="..."
                                    textColor="black"
                                    ringColor="red"
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        {image ? (
                            <img
                                className="object-contain sm:object-scale-down rounded-lg"
                                src={image}
                                alt="post content"
                            />
                        ) : null}
                        <div className="flex justify-center p-2">{text}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        {comments ? (
                            <Link
                                to={`/forum/post/${postId}/comment`}
                                className="flex text-xs lowercase pl-4 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                            >
                                {comments} {commentsText}
                            </Link>
                        ) : (
                            <Link
                                to={`/forum/post/${postId}/newcomment`}
                                className="flex text-xs lowercase pl-4 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                            >
                                ajouter un commentaire
                            </Link>
                        )}
                        <div className="flex text-xs pr-4">
                            {likes} <LikePost postId={postId} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
