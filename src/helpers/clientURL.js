// function for the beginning of the url with parameters
const urlHelper = (suffixURL, method, shouldBeAuthenticated) => {
    const url = (() => {
        switch (process.env.CLIENT_URL) {
            case 'localhost':
                return 'http://localhost:3000/';
            default:
                return 'http://localhost:3000/';
        }
    })()
    return { url : url + 'api/' + suffixURL, method, shouldBeAuthenticated };
}

// list of urls to fetch what's needed from the backend
export const ClientURL = {
    Auth: {
        login: () => urlHelper('auth/login', 'POST', false),
        register: () => urlHelper('auth/signup', 'POST', false)
    },
    Admin: {
        fetchAllProfiles: () => urlHelper('profile', 'GET', true),
        deleteUser: (userId) => urlHelper(`profile/${userId}`, 'DELETE', true),
        deletePost: (id) => urlHelper(`/post/${id}`, 'DELETE', true),
        deleteComment: (commentId) => urlHelper(`/comment/${commentId}`, 'DELETE', true)
    },
    User: {
        profile: () => urlHelper('profile/me', 'GET', true),
        updateProfile: () => urlHelper('profile/me/update', 'PUT', true),
        deleteProfile: () => urlHelper('profile/me/delete', 'DELETE', true),
    },
    Forum: {
        forum: () => urlHelper('forum/1/post?start=0', 'GET', true),
        post: (id) => urlHelper(`forum/1/post/${id}`, 'GET', true),
        comment: (id) => urlHelper(`forum/1/post/${id}/comment`, 'GET', true),
        addComment: (id) => urlHelper(`forum/1/post/${id}/comment`, 'POST', true),
        addPost: () => urlHelper(`forum/1/post`, 'POST', true),
        fetchOneComment: (id, commentId) => urlHelper(`forum/1/post/${id}/comment/${commentId}`, 'GET', true),
        deleteComment: (id, commentId) => urlHelper(`forum/1/post/${id}/comment/${commentId}`, 'DELETE', true),
        updateComment: (id, commentId) => urlHelper(`forum/1/post/${id}/comment/${commentId}`, 'PUT', true),
        deletePost: (id) => urlHelper(`forum/1/post/${id}`, 'DELETE', true),
        updatePost: (id) => urlHelper(`forum/1/post/${id}`, 'PUT', true),
        likePost: (id) => urlHelper(`forum/1/post/${id}/like`, 'POST', true),
        hasLiked: (id) => urlHelper(`forum/1/post/${id}/like`, 'GET', true),
    }
}
