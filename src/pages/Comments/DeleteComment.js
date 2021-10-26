import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import Comment from '../../components/Comment'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'

class DeleteComment extends React.Component {
    state = {
        comment: null,
    }

    fetchComment = async () => {
        const id = this.props.match.params.postId
        const commentId = this.props.match.params.commentId
        const comment = await customFetch(
            ClientURL.Forum.fetchOneComment(id, commentId)
        )
        this.setState({ comment })
    }

    deleteComment = async () => {
        const id = this.props.match.params.postId
        const commentId = this.props.match.params.commentId
        const deleteComment = await customFetch(
            ClientURL.Forum.deleteComment(id, commentId)
        )
        this.props.history.push(`/forum/post/${id}/comment`)
        return deleteComment
    }

    componentDidMount() {
        this.fetchComment()
    }

    render() {
        const id = this.props.match.params.postId
        const commentId = this.props.match.params.commentId
        return (
            <div className="bg-white dark:bg-blue h-screen flex items-center">
                <div className="bg-pink dark:bg-blue m-4 p-2 rounded-lg flex flex-col w-full">
                    {this.state.comment ? (
                        <Comment
                            author={this.state.comment.author}
                            comment={this.state.comment.commentMessage}
                            date={this.state.comment.createdAt}
                        />
                    ) : null}
                    <div className="flex flex-row justify-center">
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
