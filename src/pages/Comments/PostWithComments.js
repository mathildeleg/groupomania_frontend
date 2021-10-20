import React from 'react'
import { withRouter } from 'react-router'
import Post from '../../components/Post'
import Comment from '../../components/Comment'
import { ClientURL } from '../../helpers/clientURL'
import { customFetch } from '../../helpers/fetch'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import LinkButton from '../../components/LinkButton'
import NavBar from '../../components/NavBar'

class PostWithComments extends React.Component {
    state = {
        post: null,
        comment: [],
    }

    fetchPost = async () => {
        const id = this.props.match.params.postId
        const post = await customFetch(ClientURL.Forum.post(id))
        this.setState({ post })
    }

    fetchComments = async () => {
        const id = this.props.match.params.postId
        const { comment } = await customFetch(ClientURL.Forum.comment(id))
        this.setState({ comment })
    }

    componentDidMount() {
        this.fetchPost()
        this.fetchComments()
    }

    render() {
        const postId = this.props.match.params.postId

        return (
            <div className="container h-auto bg-pink">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex flex-col flex-auto">
                        {this.state.post ? (
                            <Post
                                user={this.state.post.author}
                                userId={this.state.post.userId}
                                date={this.state.post.createdAt}
                                text={this.state.post.contentMessage}
                                comments={this.state.post.commentsCount}
                                commentsText={
                                    this.state.post.commentsCount <= 1
                                        ? 'commentaire'
                                        : 'commentaires'
                                }
                                likes={this.state.post.likesCount}
                                image={this.state.post.contentImg}
                                postId={this.state.post.postId}
                            />
                        ) : null}
                        {this.state.comment.map((comment, index) => (
                            <Comment
                                key={`comment_${index}`}
                                author={comment.author}
                                comment={comment.commentMessage}
                                date={comment.createdAt}
                                postId={comment.postId}
                                commentId={comment.commentId}
                                userId={comment.userId}
                            />
                        ))}
                        <div className="flex justify-center">
                            <LinkButton
                                to={`/forum/post/${postId}/newcomment`}
                                text="Ajouter un commentaire"
                                color="red"
                                otherProps="text-white flex justify-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(withPrivateRoute(PostWithComments))
