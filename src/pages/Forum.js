import React from 'react'
import Post from '../components/Post'
import PostImg from '../components/PostImg'
import { ClientURL } from '../helpers/clientURL'
import { customFetch } from '../helpers/fetch'
import withPrivateRoute from '../helpers/withPrivateRoute'

class Forum extends React.Component {
    state = {
        post: [],
    }

    fetchPosts = async () => {
        const post = await customFetch(ClientURL.Forum.forum)
        this.setState({ post })
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        return (
            <div>
                {this.state.post.map((post, index) =>
                    post.contentImg === null ? (
                        <Post
                            key={`post_${index}`}
                            user={post.author}
                            date={post.createdAt}
                            text={post.contentMessage}
                            comments={post.commentsCount}
                            likes={post.likesCount}
                        />
                    ) : (
                        <PostImg
                            key={`post_${index}`}
                            user={post.author}
                            date={post.createdAt}
                            text={post.contentMessage}
                            comments={post.commentsCount}
                            likes={post.likesCount}
                            image={post.contentImg}
                        />
                    )
                )}
            </div>
        )
    }
}

export default withPrivateRoute(Forum)
