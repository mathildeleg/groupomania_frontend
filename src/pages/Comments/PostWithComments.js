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

    // fetch post
    fetchPost = async () => {
        // get post id
        const id = this.props.match.params.postId
        // fetch post
        const post = await customFetch(ClientURL.Forum.post(id))
        // put post in the state
        this.setState({ post })
    }

    // fetch comments of a post
    fetchComments = async () => {
        // get post id
        const id = this.props.match.params.postId
        // fetch comments
        const { comment } = await customFetch(ClientURL.Forum.comment(id))
        // put comments in the state
        this.setState({ comment })
    }

    // display post and its comments
    componentDidMount() {
        this.fetchPost()
        this.fetchComments()
    }

    render() {
        // get post id
        const postId = this.props.match.params.postId
        return (
            <div className="container h-auto bg-pink dark:bg-blue">
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
                                postId={postId}
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
