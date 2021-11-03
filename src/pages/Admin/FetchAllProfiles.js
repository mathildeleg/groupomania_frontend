import React from 'react'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import NavBar from '../../components/NavBar'
import BackOffice from '../../components/BackOffice'

class FetchAllProfiles extends React.Component {
    state = {
        profile: [],
    }

    // fetch all the profiles of signed up users
    fetchAllProfiles = async () => {
        const profile = await customFetch(ClientURL.Admin.fetchAllProfiles())
        this.setState({ profile })
    }

    // display profiles
    componentDidMount() {
        this.fetchAllProfiles()
    }

    render() {
        return (
            <div className="container h-auto bg-pink dark:bg-blue">
                <div className="flex flex-row">
                    <NavBar />
                    <div className="flex mx-6 md:items-center md:justify-center overflow-x-auto">
                        <div className="my-2 md:mx-6 lg:mx-8">
                            <div className="py-2 align-middle inline-block min-w-full md:px-5 lg:px-4">
                                <div className="shadow overflow-hidden border-b border-white dark:border-blue sm:rounded-lg">
                                    <table className="min-w-1/2 divide-y divide-white dark:divide-blue table-fixed">
                                        <thead className="bg-gray-50 dark:bg-red-dark">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3 text-left text-xs font-semibold text-red dark:text-pink-dark uppercase tracking-wider"
                                                >
                                                    Utilisateurs
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative px-4 py-3"
                                                >
                                                    <span className="sr-only">
                                                        Supprimer
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        {this.state.profile.map(
                                            (profile, index) => (
                                                <BackOffice
                                                    key={`comment_${index}`}
                                                    email={profile.email}
                                                    firstName={
                                                        profile.firstName
                                                    }
                                                    lastName={profile.lastName}
                                                    userId={profile.userId}
                                                    avatar={profile.avatar}
                                                />
                                            )
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(FetchAllProfiles)
