import React from 'react'
import { ClientURL } from '../../helpers/clientURL'
import { customFetch } from '../../helpers/fetch'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import NavBar from '../../components/NavBar'
import Profile from '../../components/Profile'

class fetchProfile extends React.Component {
    state = {
        profile: null,
    }

    fetchProfile = async () => {
        const profile = await customFetch(ClientURL.User.profile())
        this.setState({ profile })
    }

    componentDidMount() {
        this.fetchProfile()
    }

    render() {
        return (
            <div className="container h-auto bg-pink">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex flex-col flex-1">
                        {this.state.profile
                            ? (
                                  <Profile
                                      firstName={this.state.profile.firstName}
                                      lastName={this.state.profile.lastName}
                                      avatar={this.state.profile.avatar}
                                      email={this.state.profile.email}
                                  />
                              )
                            : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(fetchProfile)
