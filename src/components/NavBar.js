import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default class NavBar extends React.Component {
    logOut = () => {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div className="bg-white h-screen overflow-hidden m-3 pt-14 flex flex-col content-center w-8 rounded-lg">
                {/* <img src='../src/icon.png' alt='logo'/> */}
                <Link to={'/forum'}>
                    <FontAwesomeIcon
                        icon={faImages}
                        className="text-pink hover:text-red visited:text-red text-2xl m-0.5"
                    />
                </Link>
                <div className="mt-16">
                    <Link to={`/profile/me`}>
                        <FontAwesomeIcon
                            icon={faCog}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1"
                        />
                    </Link>
                    <button onClick={this.logOut}>
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1"
                        />
                    </button>
                </div>
            </div>
        )
    }
}
