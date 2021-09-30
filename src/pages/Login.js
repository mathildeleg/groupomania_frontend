import { Formik } from 'formik'
import React from 'react'
import Button from '../components/Button'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import { ClientURL } from '../helpers/clientURL'
import TokenContext from '../helpers/TokenContext'
import { customFetch } from '../helpers/fetch'

export default class Login extends React.Component {
    static contextType = TokenContext

    componentDidMount() {
        const token = localStorage.getItem('token')
        this.loginAndNavigate(token)
    }

    loginAndNavigate = (token) => {
        const { setToken } = this.context
        if (token) {
            setToken(token)
            this.props.history.push('/forum')
        }
    }

    loginUser = async (data) => {
        const { setToken } = this.context
        const dataToken = await customFetch(ClientURL.Auth.login, {
            email: data.email,
            password: data.password,
        })
        localStorage.setItem('token', dataToken.token)
        this.loginAndNavigate(dataToken.token)
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.loginUser(values)
                        setSubmitting(false)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <InputEmail
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <InputPassword
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <Button
                                type="submit"
                                text="Se connecter"
                                color="pink"
                            />
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
