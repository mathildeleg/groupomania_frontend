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
        const { firstName, lastName, email, userId } = this.props

        return (
            <div className="container flex flex-col bg-pink space-y-4">
                <div className="space-y-4 rounded-xl bg-white p-4">
                    <div className="flex flex-col space-x-4 space-y-1 justify-center pr-5">
                        <div className="lowercase text-red font-semibold pl-4">
                            utilisateur
                        </div>
                        <div className="rounded-xl bg-pink p-4">
                            {firstName} {lastName}
                        </div>
                    </div>
                    <div className="flex flex-col space-x-4 space-y-1 justify-center pr-5">
                        <div className="lowercase text-red font-semibold pl-4">
                            Email
                        </div>
                        <div className="rounded-xl bg-pink p-4">{email}</div>
                    </div>
                    <div className="bg-white rounded-lg flex justify-center p-4">
                        <button
                            onClick={this.deleteUser}
                            userId={userId}
                            className="bg-red rounded-xl text-white font-semibold p-2"
                        >
                            Supprimer ce compte
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
