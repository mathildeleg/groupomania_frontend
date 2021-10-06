import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import Comment from '../../components/Comment'
import { Link } from 'react-router-dom'


class DeleteComment extends React.Component {
    state = {
        comment: null,
    }

    fetchComment = async () => {
        const id = this.props.match.params.postId
        const commentId = this.props.match.params.commentId
        const comment = await customFetch(ClientURL.Forum.fetchOneComment(id, commentId))
        this.setState({ comment })
    }

    deleteComment = async () => {
        const id = this.props.match.params.postId
        const commentId = this.props.match.params.commentId
        const deleteComment = await customFetch(ClientURL.Forum.deleteComment(id, commentId))
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
            <div className="bg-pink m-4 rounded-lg flex"> 
                {this.state.comment ? 
                    <Comment
                        author={this.state.comment.author}
                        comment={this.state.comment.commentMessage}
                        date={this.state.comment.createdAt}
                    />
                : null
                }
                <Link to={`/forum/post/${id}/updatecomment/${commentId}`}>Modifier</Link>
                <button onClick={this.deleteComment}>Supprimer</button>
            </div>
        )
    }
}

export default withPrivateRoute(DeleteComment)
