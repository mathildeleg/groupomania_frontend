import React from 'react'
import { customFetch } from '../helpers/fetch'
import { ClientURL } from '../helpers/clientURL'

export default class BackOffice extends React.Component {
    deleteUser = async () => {
        const userId = this.props.userId
        const deleteUser = await customFetch(ClientURL.Admin.deleteUser(userId))
        this.props.history.push('/profile')
        return deleteUser
    }

    render() {
        const { firstName, lastName, email, avatar, userId } = this.props

        return (
            <tbody className="bg-white divide-y divide-white">
                    <tr>
                        <td className="px-2 py-2 md:px-20 md:py-8 lg:px-28 lg:py-8 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 md:h-16 md:w-16 inline-flex">
                                    <img
                                        className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover"
                                        src={avatar}
                                        alt=""
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
                                className="bg-red rounded-xl text-white font-semibold p-2"
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
            </tbody>
        )
    }
}
