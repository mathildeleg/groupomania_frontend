import React from 'react'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'

class FetchAllProfiles extends React.Component {
    state = {
        profile: [],
    }

    fetchAllProfiles = async () => {
        const profile = await customFetch(ClientURL.Admin.fetchAllProfiles())
        this.setState({ profile })
    }

    componentDidMount() {
        this.fetchAllProfiles()
    }

    render() {
        return (
            <div className="container h-auto bg-pink">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex flex-col flex-auto">
                        {this.state.profile.map((profile, index) => (
                            <div className="m-8">
                                <Profile
                                    key={`comment_${index}`}
                                    email={profile.email}
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    userId={profile.userId}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(FetchAllProfiles)
