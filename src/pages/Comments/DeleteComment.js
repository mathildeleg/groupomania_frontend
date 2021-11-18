import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import Comment from '../../components/Comment'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import AuthContext from '../../helpers/AuthProvider'

class DeleteComment extends React.Component {
    static contextType = AuthContext

    state = {
        comment: null,
    }

    getPostId = () => this.props.match.params.postId
    getCommentId = () => this.props.match.params.commentId

    fetchComment = async () => {
        const id = this.getPostId()
        const commentId = this.getCommentId()
        const comment = await customFetch(
            ClientURL.Forum.fetchOneComment(id, commentId)
        )
        // put comment in the state
        this.setState({ comment })
    }

    // allow user to delete their comment
    deleteComment = async () => {
        const id = this.getPostId()
        const commentId = this.getCommentId()
        const deleteComment = await customFetch(
            ClientURL.Forum.deleteComment(id, commentId)
        )
        // redirect to post to see that the comment is deleted
        this.props.history.push(`/forum/post/${id}/comment`)
        return deleteComment
    }

    // allow admin to delete a comment
    adminDeleteComment = async () => {
        const id = this.getPostId()
        const commentId = this.getCommentId()
        const deleteComment = await customFetch(
            ClientURL.Admin.deleteComment(id, commentId)
        )
        // redirect to post to see that the comment is deleted
        this.props.history.push(`/forum/post/${id}/comment`)
        return deleteComment
    }

    // display the comment
    componentDidMount() {
        this.fetchComment()
    }

    render() {
        const id = this.getPostId()
        const commentId = this.getCommentId()
        const { comment } = this.state
        const { profile } = this.context
        return (
            <div className="bg-white dark:bg-blue h-screen flex items-center">
                <div className="bg-pink dark:bg-blue m-4 md:m-32 p-2 rounded-lg flex flex-col w-full">
                    {comment ? (
                        <Comment
                            author={comment.author}
                            comment={comment.commentMessage}
                            date={comment.createdAt}
                        />
                    ) : null}
                    <div className="flex flex-row justify-center">
                        {profile.isAdmin === true ? (
                            <div className="flex flex-col justify-center pt-8">
                                <Button
                                    onClick={this.adminDeleteComment}
                                    text="Supprimer"
                                    color="pink"
                                />
                            </div>
                        ) : (
                            <div>
                                <LinkButton
                                    to={`/forum/post/${id}/updatecomment/${commentId}`}
                                    text="Modifier"
                                    color="red"
                                ></LinkButton>
                                <Button
                                    onClick={this.deleteComment}
                                    text="Supprimer"
                                    color="pink"
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <LinkButton
                            to={`/forum/post/${id}/comment`}
                            text="Annuler"
                            color="white"
                            textColor="red"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(DeleteComment)
