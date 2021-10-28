import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import logo from '../icon.svg'
import AuthContext from '../helpers/AuthProvider'

export default class NavBar extends React.Component {
    static contextType = AuthContext

    logOut = () => {
        localStorage.removeItem('token')
    }

    render() {
        const { profile } = this.context

        return (
            <div className="bg-white dark:bg-pink-dark h-screen ml-3 my-5 flex flex-col items-start w-9 rounded-lg lg:mx-8 lg:w-40">
                <img
                    src={logo}
                    alt="logo"
                    className="flex content-start mt-8"
                />
                <Link to={'/forum'} className="text-pink dark:text-blue hover:text-red dark:hover:text-red-dark dark:visited:text-red-dark visited:text-red focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent flex flex-row justify-center content-center mt-16 lg:mt-24 lg:ml-3">
                    <FontAwesomeIcon
                        icon={faImages}
                        className="text-2xl flex m-1 lg:text-3xl"
                    />
                    <p className="invisible lg:visible flex content-center lg:text-red lg:dark:text-blue lg:font-semibold lg:text-base lg:m-1.5 lg:ml-2">Forum</p>
                </Link>
                <div className="mt-96 flex flex-col lg:ml-0">
                    {profile.isAdmin === true ? (
                        <Link to={`/profile`} className="text-pink dark:text-blue hover:text-red dark:hover:text-red-dark dark:visited:text-red-dark visited:text-red focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent flex flex-row content-center m-1 mb-16 text-2xl lg:text-3xl lg:ml-3 lg:m-2 lg:mt-24">
                            <FontAwesomeIcon
                                icon={faUsersCog}
                            />
                            <p className="invisible lg:visible flex content-center dark:visited:text-red-dark visited:text-red lg:text-red lg:dark:text-blue lg:font-semibold lg:text-base lg:m-1 lg:ml-2">Back office</p>
                        </Link>
                    ) : null}
                    <Link to={`/profile/me`} className="text-pink dark:text-blue hover:text-red dark:hover:text-red-dark dark:visited:text-red-dark visited:text-red focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent flex flex-row content-center m-1.5 text-2xl lg:text-3xl lg:mt-24">
                        <FontAwesomeIcon
                            icon={faCog}
                        />
                        <p className="invisible lg:visible flex content-center dark:visited:text-red-dark lg:text-red lg:dark:text-blue lg:font-semibold lg:text-base lg:m-1 lg:ml-2">Paramètres</p>
                    </Link>
                    <button onClick={this.logOut} className="focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent flex flex-row content-center m-1.5 lg:ml-3 text-2xl lg:text-3xl lg:mt-24">
                        <Link to="/" className="text-pink dark:text-blue hover:text-red dark:hover:text-red-dark dark:visited:text-red-dark visited:text-red focus:outline-none focus:ring-2 focus:ring-red dark:focus:ring-blue focus:border-transparent flex flex-row">
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                            />
                            <p className="invisible lg:visible flex content-center dark:visited:text-red-dark lg:text-red lg:dark:text-blue lg:font-semibold lg:text-base lg:m-0.5 lg:ml-2">Déconnexion</p>
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}
