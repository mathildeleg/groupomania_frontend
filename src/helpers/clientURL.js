
const urlHelper = (suffixURL, method, shouldBeAuthenticated) => {
    const url = (() => {
        switch (process.env.CLIENT_URL) {
            case 'localhost':
                return 'http://localhost:3000/';
            default:
                return 'http://localhost:3000/';
        }
    })()
    return { url : url + 'api/' + suffixURL, method, shouldBeAuthenticated};
}

export const ClientURL = {
    Auth: {
        login: urlHelper('auth/login', 'POST', false),
        register: urlHelper('auth/signup', 'POST', false)
    },
}
