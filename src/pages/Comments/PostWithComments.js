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

    getPostId = () => this.props.match.params.postId; 

    // fetch post
    fetchPost = async () => {
        // get post id
        const id = this.getPostId();
        // fetch post
        const post = await customFetch(ClientURL.Forum.post(id))
        // put post in the state
        this.setState({ post })
    }

    // fetch comments of a post
    fetchComments = async () => {
        // get post id
        const id = this.getPostId();
        // fetch comments of that post
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
        const postId = this.getPostId();
        const { post, comment } = this.state;
        return (
            <div className="container h-auto bg-pink dark:bg-blue">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex flex-col flex-auto">
                        {post ? (
                            <Post
                                user={post.author}
                                userId={post.userId}
                                date={post.createdAt}
                                text={post.contentMessage}
                                comments={post.commentsCount}
                                commentsText={
                                    post.commentsCount <= 1
                                        ? 'commentaire'
                                        : 'commentaires'
                                }
                                likes={post.likesCount}
                                image={post.contentImg}
                                postId={postId}
                            />
                        ) : null}
                        {comment.map((comment, index) => (
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(withPrivateRoute(PostWithComments))
