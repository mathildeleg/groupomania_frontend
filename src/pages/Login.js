import { Formik } from 'formik'
import React from 'react'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import Errors from '../components/form/Errors'
import { ClientURL } from '../helpers/clientURL'
import AuthContext from '../helpers/AuthProvider'
import { customFetch } from '../helpers/fetch'
import { isTokenExpired } from '../helpers/fetch'

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
        const tokenExpiry = isTokenExpired(token);
        if (!tokenExpiry) {
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
            <div className="bg-pink dark:bg-blue rounded-lg h-screen m-4 flex flex-col items-center">
                <div className="flex flex-col items-center mt-14">
                    <svg
                        data-v-1084b650=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        className="fill-current dark:text-pink-dark text-pink h-44 w-44"
                    >
                        <g
                            data-v-1084b650=""
                            id="640fb903-7c97-3a8b-d0a7-369102908d0a"
                            stroke="none"
                            transform="matrix(0.8499999999999999,0,0,0.8499999999999999,22.500006484985377,22.50005836486818)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-205 207 100 100"
                            >
                                <switch>
                                    <g>
                                        <path d="M-155 298.8c11.2 0 21.7-4.3 29.6-12.2 7.9-7.9 12.2-18.4 12.2-29.6 0-11.2-4.3-21.7-12.2-29.6-7.9-7.9-18.4-12.2-29.6-12.2s-21.7 4.3-29.6 12.2c-7.9 7.9-12.2 18.4-12.2 29.6 0 11.2 4.3 21.7 12.2 29.6 7.9 7.9 18.4 12.2 29.6 12.2zm2.4-7.1c-.8.1-1.6.1-2.4.1-1.1 0-2.2-.1-3.3-.2-3.6-5.6-6.3-11.6-7.9-17.9h17.7c.6 1.5 1.7 2.9 3 3.8-1.7 5-4.1 9.7-7.1 14.2zm9.5-2c1.9-3.5 3.4-7 4.6-10.7 2.9-.6 5.2-2.6 6.3-5.3h7.7c-4 7.3-10.7 13-18.6 16zm22.8-32.7c0 3.3-.5 6.5-1.3 9.6h-10.8c-.6-1.3-1.6-2.5-2.8-3.4.2-2.2.3-4.4.3-6.6 0-3.1-.2-6.2-.6-9.2h13.8c1 3 1.4 6.3 1.4 9.6zm-4.2-16.7h-12.2c-1.3-5.5-3.2-10.7-5.8-15.7 7.6 2.9 14 8.6 18 15.7zm-17.4 16.3c0 1.7-.1 3.4-.2 5.1-2.8.6-5.1 2.4-6.2 4.9h-19.3c-.4-3-.7-6.1-.7-9.1 0-1.9.1-3.8.3-5.7 2.6-.5 4.7-2.2 6-4.4h19.5c.4 3 .6 6.1.6 9.2zm-15.7-34.2c.9-.1 1.8-.1 2.6-.1 1 0 2 0 3 .1 3.6 5.6 6.3 11.6 7.9 17.9h-17.4c-.6-1.7-1.7-3.2-3.1-4.3 1.8-4.8 4.1-9.3 7-13.6zm-9.5 2c-1.7 3.2-3.2 6.6-4.4 10-3.1.6-5.6 2.9-6.6 5.8h-7.3c3.9-7.1 10.4-12.8 18.3-15.8zm-22.6 32.6c0-3.3.5-6.6 1.4-9.6h10.9c.6 1.1 1.5 2.1 2.5 2.9-.2 2.4-.4 4.8-.4 7.2 0 3.1.2 6.1.6 9.1h-13.6c-1-3.1-1.4-6.3-1.4-9.6zm16.2 16.6c1.3 5.4 3.2 10.7 5.8 15.7-7.6-3-13.9-8.6-17.8-15.7h12z"></path>
                                    </g>
                                </switch>
                            </svg>
                        </g>
                    </svg>
                    <p className="text-red dark:text-red-dark font-bold text-3xl pb-14">
                        Groupomania
                    </p>
                </div>
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
                                    ring="red"
                                />
                                <LinkButton
                                    to={`/`}
                                    text="Annuler"
                                    color="white"
                                    textColor="red"
                                    ring="white"
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
