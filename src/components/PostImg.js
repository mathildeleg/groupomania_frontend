import React from 'react'

function timeAgo(input) {
    const date = input instanceof Date ? input : new Date(input)
    const formatter = new Intl.RelativeTimeFormat('fr')
    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    }
    const secondsElapsed = (date.getTime() - Date.now()) / 1000
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key]
            return formatter.format(Math.round(delta), key)
        }
    }
}

export default class PostImg extends React.Component {
    render() {
        const { text, user, date, comments, likes, image } = this.props
        const minutes = timeAgo(date)

        return (
            <div className="container flex bg-pink">
                <div className="container rounded-lg bg-white m-5 p-4">
                    <div className="flex flex-col justify-start pl-4">
                        <div className="text-red">{user}</div>
                        <div className="text-xs pl-8 lowercase">{minutes}</div>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <img
                            className="object-contain sm:object-scale-down"
                            src={image}
                            alt="postImage"
                        />
                        <div className="flex justify-center p-2">{text}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex text-xs lowercase pl-4">
                            {comments} commentaire
                        </div>
                        <div className="flex text-xs pr-4">
                            {likes}{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
