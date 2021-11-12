import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../helpers/timeAgo'
import LinkButton from './LinkButton'
import LikePost from '../pages/Posts/LikePost'
import AuthContext from '../helpers/AuthProvider'

// create a component for post (design-wise) and that allows user to like a post
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
                            <div className="text-red dark:text-blue">
                                {user}
                            </div>
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
                                    ring="red"
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
                        {profile.userId === userId ? (
                            <div className="flex text-xs pr-4">
                                {likes}{' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex text-xs pr-4">
                                {likes} <LikePost postId={postId} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
