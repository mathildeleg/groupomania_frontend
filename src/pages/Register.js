import { Formik } from 'formik'
import React from 'react'
import Button from '../components/Button'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import InputFirstName from '../components/form/InputFirstName'
import InputLastName from '../components/form/InputLastName'
import InputAvatar from '../components/form/InputAvatar'
import { ClientURL } from '../helpers/clientURL'
import TokenContext from '../helpers/TokenContext'
import { customFetch } from '../helpers/fetch'

export default class Register extends React.Component {
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

    registerUser = async (data) => {
        // const { setToken } = this.context
        const dataToken = await customFetch(ClientURL.Auth.register, {
            userProfile: {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                avatar: data.avatar,
            }
        })
        console.log(dataToken)
        localStorage.setItem('token', dataToken.token)
        this.loginAndNavigate(dataToken.token)
    }

    render() {
        return (
            <div className="container bg-white">
                <div className="bg-pink rounded-lg m-3 h-auto flex flex-col items-center">
                    <Formik
                        initialValues={{
                                email: '',
                                password: '',
                                firstName: '',
                                lastName: '',
                                avatar: '',
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.registerUser(values)
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
                                <InputFirstName
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                <InputLastName
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                                <InputAvatar
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.avatar}
                                />
                                <Button
                                    type="submit"
                                    text="S'inscrire"
                                    color="white"
                                />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}
