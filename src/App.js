import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Forum from './pages/Forum'
import Register from './pages/Register'
import PostWithComments from './pages/PostWithComments'
import { TokenProvider } from './helpers/TokenContext'
import React from 'react'
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <TokenProvider>
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
                            <Route exact path="/forum" component={Forum}>
                            </Route>
                            <Route exact path="/forum/post/:postId/comment" component={PostWithComments}>
                            </Route>
                        </TokenProvider>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
