import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Forum from './pages/Forum'
import Register from './pages/Register'
import AddComment from './pages/Comments/AddComment'
import AddPost from './pages/Posts/AddPost'
import PostWithComments from './pages/Comments/PostWithComments'
import DeleteComment from './pages/Comments/DeleteComment'
import { AuthProvider } from './helpers/AuthProvider'
import React from 'react'
import UpdateComment from './pages/Comments/UpdateComment'
import UpdatePost from './pages/Posts/UpdatePost'
import FetchProfile from './pages/Profile/FetchProfile'
import UpdateProfile from './pages/Profile/UpdateProfile'
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage}></Route>
                        <AuthProvider>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            ></Route>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            ></Route>
                            <Route
                                exact
                                path="/profile/me"
                                component={FetchProfile}
                            ></Route>
                            <Route
                                exact
                                path="/profile/me/update"
                                component={UpdateProfile}
                            ></Route>
                            <Route
                                exact
                                path="/forum"
                                component={Forum}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post"
                                component={AddPost}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post/:postId"
                                component={UpdatePost}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post/:postId/comment"
                                component={PostWithComments}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post/:postId/newcomment"
                                component={AddComment}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post/:postId/comment/:commentId"
                                component={DeleteComment}
                            ></Route>
                            <Route
                                exact
                                path="/forum/post/:postId/updatecomment/:commentId"
                                component={UpdateComment}
                            ></Route>
                        </AuthProvider>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
