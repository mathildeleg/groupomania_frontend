import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="bg-white h-screen m-3 pt-14 flex flex-col content-center w-8 rounded-lg">
                {/* <img src='' alt='logo'/> */}
                <div className="flex flex-col">
                    <Link to={'/forum'}>
                        <FontAwesomeIcon
                            icon={faImages}
                            className="text-pink hover:text-red visited:text-red text-2xl m-0.5"
                        />
                    </Link>
                    <Link>
                        <FontAwesomeIcon
                            icon={faCog}
                            className="text-pink hover:text-red visited:text-red text-2xl m-1"
                        />
                    </Link>
                </div>
                <div className="flex flex-col p-1.5 pt-16">
                    <Link>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="text-pink hover:text-red visited:text-red text-2xl"
                        />
                    </Link>
                    <Link>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-pink hover:text-red visited:text-red text-2xl"
                        />
                    </Link>
                </div>
                <Link>
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-pink hover:text-red visited:text-red text-2xl m-1"
                    />
                </Link>
            </div>
        )
    }
}
