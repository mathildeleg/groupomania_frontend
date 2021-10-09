import React from 'react'
import { ClientURL } from '../../helpers/clientURL'
import { customFetch } from '../../helpers/fetch'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import NavBar from '../../components/NavBar'
import Profile from '../../components/Profile'
import LinkButton from '../../components/LinkButton'
import DeleteProfile from './DeleteProfile'

class FetchProfile extends React.Component {
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
                        {this.state.profile ? (
                            <Profile
                                firstName={this.state.profile.firstName}
                                lastName={this.state.profile.lastName}
                                avatar={this.state.profile.avatar}
                                email={this.state.profile.email}
                            />
                        ) : null}
                        <div className="bg-pink m-2 mt-8 rounded-lg flex justify-center">
                            <LinkButton
                                to={'/profile/me/update'}
                                text="Modifier le profil"
                                color="red"
                            />
                        </div>
                        <div>
                            <DeleteProfile />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(FetchProfile)
