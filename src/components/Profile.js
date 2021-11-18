import React from 'react'

// create a component for profile (design-wise)
export default class Profile extends React.Component {
    render() {
        const { avatar, firstName, lastName, email } = this.props

        return (
                <div className="flex flex-col space-x-4 justify-center items-center p-4 m-8 md:m-14 space-y-4">
                    <img
                        className="h-16 w-16 rounded-full ring-2 ring-white object-cover"
                        src={avatar}
                        alt="user's avatar"
                    >
                    </img>
                    <div className="space-y-4">
                        <div className="flex flex-col space-y-1 justify-center">
                            <div className="lowercase text-red dark:text-pink-dark font-semibold">
                                Prénom
                            </div>
                            <div className="rounded-xl bg-white dark:bg-pink-dark p-4">
                                {firstName}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 justify-center">
                            <div className="lowercase text-red dark:text-pink-dark font-semibold">
                                Nom
                            </div>
                            <div className="rounded-xl bg-white dark:bg-pink-dark p-4">
                                {lastName}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 justify-center">
                            <div className="lowercase text-red dark:text-pink-dark font-semibold">
                                Email
                            </div>
                            <div className="rounded-xl bg-white dark:bg-pink-dark p-4">
                                {email}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
