import React from 'react'
import Post from '../components/Post'
import { ClientURL } from '../helpers/clientURL'
import { customFetch } from '../helpers/fetch'
import withPrivateRoute from '../helpers/withPrivateRoute'
import LinkButton from '../components/LinkButton'
import NavBar from '../components/NavBar'

class Forum extends React.Component {
    state = {
        post: [],
    }

    fetchPosts = async () => {
        const post = await customFetch(ClientURL.Forum.forum())
        this.setState({ post })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div className="container h-auto bg-pink">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex flex-col flex-1 mt-8">
                        <LinkButton
                            to={`forum/post`}
                            text="Créer un post"
                            color="red"
                        />
                        {this.state.post.map((post, index) => (
                            <Post
                                key={`post_${index}`}
                                userId={post.userId}
                                user={post.author}
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
                                postId={post.postId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(Forum)
