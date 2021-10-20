import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../icon.png'

export default class NavBar extends React.Component {
    logOut = () => {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div className="bg-white h-screen overflow-hidden m-3 flex flex-col content-center w-9 rounded-lg">
                <img
                    src={logo}
                    alt="logo"
                    className="flex content-start mt-8"
                />
                <Link to={'/forum'}>
                    <FontAwesomeIcon
                        icon={faImages}
                        className="text-pink hover:text-red visited:text-red text-2xl flex m-1 mt-16"
                    />
                </Link>
                <div className="mt-96">
                    <Link to={`/profile/me`}>
                        <FontAwesomeIcon
                            icon={faCog}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1.5"
                        />
                    </Link>
                    <button onClick={this.logOut}>
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1.5"
                        />
                    </button>
                </div>
            </div>
        )
    }
}
