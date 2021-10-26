import { Formik } from 'formik'
import React from 'react'
import logo from '../assets/icon-login.svg'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import Errors from '../components/form/Errors'
import { ClientURL } from '../helpers/clientURL'
import AuthContext from '../helpers/AuthProvider'
import { customFetch } from '../helpers/fetch'

export default class Login extends React.Component {
    static contextType = AuthContext

    state = {
        error: null,
    }

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
        dataToken.error !== undefined
            ? this.setState({ error: 'Email ou mot de passe incorrect' })
            : localStorage.setItem('token', dataToken.token) 
        this.loginAndNavigate(dataToken.token)
    }

    render() {
        return (
            <div className="bg-pink dark:bg-blue h-screen m-4 flex flex-col items-center">
                <img src={logo} alt="logo" className="w-2/3 mt-14" />
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
                    }) => (
                        <form
                            className="flex flex-col justify-center w-screen pl-2 pr-6"
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
                            {this.state.error === null ? null : (
                                <div className="flex justify-center lowercase text-red dark:text-pink-dark font-semibold m-2">
                                    {this.state.error}
                                </div>
                            )}
                            <div className="flex justify-center pt-8">
                                <Button
                                    type="submit"
                                    text="Se connecter"
                                    color="pink"
                                    ringColor="red"
                                />
                                <LinkButton
                                    to={`/`}
                                    text="Annuler"
                                    color="white"
                                    textColor="red"
                                    ringColor="white"
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
