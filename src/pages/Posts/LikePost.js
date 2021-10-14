import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'

class LikePost extends React.Component {
    state = {
        liked: false,
    }

    likePost = async () => {
        const { postId } = this.props
        await customFetch(ClientURL.Forum.likePost(postId))
        this.setState({ liked: true })
    }

    hasLiked = async () => {
        const { postId } = this.props
        const hasLiked = await customFetch(ClientURL.Forum.hasLiked(postId))
        this.setState({ liked: hasLiked.data })
    }

    componentDidMount(){
        this.hasLiked()
    }

    render() {
        return (
            <div onClick={this.likePost}>
                {this.state.liked === false ? (
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
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="#C1170B"
                        viewBox="0 0 24 24"
                        stroke="#C1170B"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                )}
            </div>
        )
    }
}

export default withPrivateRoute(LikePost)
