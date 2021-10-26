import React from 'react'
import { customFetch } from '../helpers/fetch'
import { ClientURL } from '../helpers/clientURL'
import { Link } from 'react-router-dom'

export default class BackOffice extends React.Component {
    deleteUser = async () => {
        const userId = this.props.userId
        const deleteUser = await customFetch(ClientURL.Admin.deleteUser(userId))
        return deleteUser
    }

    render() {
        const { firstName, lastName, email, avatar, userId } = this.props

        return (
            <tbody className="bg-white dark:bg-pink-dark divide-y divide-white">
                <tr>
                    <td className="px-2 py-2 md:px-20 md:py-8 lg:px-28 lg:py-8 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 md:h-16 md:w-16 inline-flex">
                                <img
                                    className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover"
                                    src={avatar}
                                    alt="user's avatar"
                                />
                            </div>
                            <div className="ml-2">
                                <div className="text-sm font-medium text-gray-900">
                                    {firstName} {lastName}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {email}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-2 py-4 md:px-10 md:py-10 lg:px-28 whitespace-nowrap text-right text-sm font-medium">
                        <button
                            onClick={this.deleteUser}
                            userId={userId}
                            className="bg-red dark:bg-red-dark rounded-xl text-white dark:text-pink-dark font-semibold p-2"
                        >
                            <Link to="/forum">Supprimer</Link>
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
}
