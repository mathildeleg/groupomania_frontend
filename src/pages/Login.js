import { Formik } from 'formik'
import React from 'react'
import Button from '../components/Button'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import Errors from '../components/form/Errors'
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
        // const { setToken } = this.context
        const dataToken = await customFetch(ClientURL.Auth.login(), {
            email: data.email,
            password: data.password,
        })
        localStorage.setItem('token', dataToken.token)
        this.loginAndNavigate(dataToken.token)
    }

    render() {
        return (
            <div className="bg-pink h-screen m-4 rounded-lg flex">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.email) {
                            errors.email = (
                                <Errors
                                    errorText={'Veuillez remplir ce champs'}
                                />
                            )
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = (
                                <Errors
                                    errorText={'Adresse email non valide'}
                                />
                            )
                        }
                        if (!values.password) {
                            errors.password = (
                                <Errors
                                    errorText={'Veuillez remplir ce champs'}
                                />
                            )
                        } else if (
                            !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i.test(
                                values.password
                            )
                        ) {
                            errors.password = (
                                <Errors errorText={'Mot de passe non valide'} />
                            )
                        }
                        return errors
                    }}
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
                        <form
                            className="flex flex-col justify-center w-screen p-4"
                            onSubmit={handleSubmit}
                        >
                            <InputEmail
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <InputPassword
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password &&
                                touched.password &&
                                errors.password}
                            <div className="flex justify-center pt-8">
                                <Button
                                    type="submit"
                                    text="Se connecter"
                                    color="pink"
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
