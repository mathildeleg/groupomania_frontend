import React from 'react'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import NavBar from '../../components/NavBar'
import Profile from '../../components/Profile'
import LinkButton from '../../components/LinkButton'
import DeleteProfile from './DeleteProfile'
import AuthContext from '../../helpers/AuthProvider'

class FetchProfile extends React.Component {
    static contextType = AuthContext;

    render() {
        const { profile } = this.context; 
        return (
            <div className="container h-auto bg-pink dark:bg-blue">
                <div className="flex flex-row items-center">
                    <NavBar />
                    <div className="flex flex-col flex-1 h-screen justify-center items-center overflow-hidden">
                        {profile ? (
                            <Profile
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                avatar={profile.avatar}
                                email={profile.email}
                                userId={profile.userId}
                            />
                        ) : null}
                        <div className="m-2 rounded-lg flex justify-center">
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
