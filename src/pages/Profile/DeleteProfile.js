import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'


class DeleteProfile extends React.Component {
    deleteProfile = async () => {
        const deleteProfile = await customFetch(ClientURL.User.deleteProfile())
        localStorage.removeItem('token')
        return deleteProfile
    }

    render() {
        return (
            <div className="rounded-lg flex justify-center"> 
                <button onClick={this.deleteProfile} className="bg-red dark:bg-red-dark rounded-xl text-white dark:text-pink-dark font-semibold p-2">Supprimer le compte</button>
            </div>
        )
    }
}

export default withPrivateRoute(DeleteProfile)
