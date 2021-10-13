import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../helpers/timeAgo'
import LinkButton from './LinkButton'
import LikePost from '../pages/Posts/LikePost'

export default class Post extends React.Component {
    render() {
        const {
            text,
            user,
            date,
            comments,
            likes,
            image,
            commentsText,
            postId,
        } = this.props
        const minutes = timeAgo(date)

        return (
            <div className="container flex bg-pink">
                <div className="container flex flex-col rounded-xl bg-white m-5 p-4">
                    <div className="flex flex-row justify-between content-start">
                        <div className="flex flex-col justify-start pl-4">
                            <div className="text-red">{user}</div>
                            <div className="text-xs pl-8 lowercase">
                                {minutes}
                            </div>
                        </div>
                        <div>
                            <LinkButton
                                to={`/forum/post/${postId}`}
                                text="..."
                                textColor="black"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        {image ? (
                            <img
                                className="object-contain sm:object-scale-down"
                                src={image}
                                alt="postImage"
                            />
                        ) : null}
                        <div className="flex justify-center p-2">{text}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        {comments ? (
                            <Link
                                to={`/forum/post/${postId}/comment`}
                                className="flex text-xs lowercase pl-4"
                            >
                                {comments} {commentsText}
                            </Link>
                        ) : (
                            <Link
                                to={`/forum/post/${postId}/newcomment`}
                                className="flex text-xs lowercase pl-4"
                            >
                                ajouter un commentaire
                            </Link>
                        )}
                        <div className="flex text-xs pr-4">
                            {likes}{' '}
                            <LikePost postId={postId}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}