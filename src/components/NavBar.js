import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import logo from '../icon.png'
import AuthContext from '../helpers/AuthProvider'

export default class NavBar extends React.Component {
    static contextType = AuthContext

    logOut = () => {
        localStorage.removeItem('token')
    }

    render() {
        const { profile } = this.context

        return (
            <div className="bg-white h-screen ml-3 mt-3 flex flex-col content-center w-9 rounded-lg lg:mx-8 lg:w-12">
                <img
                    src={logo}
                    alt="logo"
                    className="flex content-start mt-8"
                />
                <Link to={'/forum'}>
                    <FontAwesomeIcon
                        icon={faImages}
                        className="text-pink hover:text-red visited:text-red text-2xl flex m-1 mt-16 lg:text-3xl lg:m-2 lg:mt-24"
                    />
                </Link>
                <div className="mt-96">
                    {profile.isAdmin === true ? (
                        <Link to={`/profile`}>
                            <FontAwesomeIcon
                                icon={faUsersCog}
                                className="text-pink hover:text-red visited:text-red text-2xl m-1 mb-16 lg:text-3xl lg:m-2 lg:mt-24"
                            />
                        </Link>
                    ) : null}
                    <Link to={`/profile/me`}>
                        <FontAwesomeIcon
                            icon={faCog}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1.5 lg:text-3xl lg:m-2.5 lg:mt-24"
                        />
                    </Link>
                    <button onClick={this.logOut}>
                        <Link to="/">
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className="text-pink hover:text-red visited:text-red text-2xl m-1.5 lg:text-3xl lg:m-2.5 lg:mt-24"
                            />
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}
