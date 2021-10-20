import React from 'react'

export default class Profile extends React.Component {
    render() {
        const { avatar, firstName, lastName, email } = this.props

        return (
            <div className="container flex flex-col bg-pink space-y-4">
                <div className="flex flex-col space-x-4 justify-center p-4 m-8 space-y-4">
                    <div>{avatar}</div>
                    {/* <button className="bg-white rounded-lg text-red font-semibold">
                        Modifier la photo
                    </button> */}
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col space-x-4 space-y-1 justify-center pr-5">
                        <div className="lowercase text-red font-semibold pl-4">
                            Prénom
                        </div>
                        <div className="rounded-xl bg-white p-4">
                            {firstName}
                        </div>
                    </div>
                    <div className="flex flex-col space-x-4 space-y-1 justify-center pr-5">
                        <div className="lowercase text-red font-semibold pl-4">
                            Nom
                        </div>
                        <div className="rounded-xl bg-white p-4">
                            {lastName}
                        </div>
                    </div>
                    <div className="flex flex-col space-x-4 space-y-1 justify-center pr-5">
                        <div className="lowercase text-red font-semibold pl-4">
                            Email
                        </div>
                        <div className="rounded-xl bg-white p-4">{email}</div>
                    </div>
                </div>
            </div>
        )
    }
}
