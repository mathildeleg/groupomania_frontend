import { Formik } from 'formik'
import React from 'react'
import logo from '../assets/icon-login.svg'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import InputEmail from '../components/form/InputEmail'
import InputPassword from '../components/form/InputPassword'
import InputFirstName from '../components/form/InputFirstName'
import InputLastName from '../components/form/InputLastName'
import InputAvatar from '../components/form/InputAvatar'
import Errors from '../components/form/Errors'
import { ClientURL } from '../helpers/clientURL'
import AuthContext from '../helpers/AuthProvider'
import { customFetch } from '../helpers/fetch'

export default class Register extends React.Component {
    static contextType = AuthContext

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
        const dataToken = await customFetch(ClientURL.Auth.register(), {
            userProfile: {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                avatar: data.avatar,
            },
        })
        console.log(dataToken)
        localStorage.setItem('token', dataToken.token)
        this.loginAndNavigate(dataToken.token)
    }

    render() {
        return (
            <div className="bg-pink dark:bg-blue m-4 flex flex-col items-center">
                <img src={logo} alt="logo" className="w-2/3 mt-4" />
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        avatar: '',
                    }}
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
                        if (!values.firstName) {
                            errors.firstName = (
                                <Errors
                                    errorText={'Veuillez remplir ce champs'}
                                />
                            )
                        } else if (
                            !/^[A-Za-z][^0-9_!¡?÷?¿+=@#$%ˆ&*¨(){}|~<>;:[\]]{1,20}$/i.test(
                                values.firstName
                            )
                        ) {
                            errors.firstName = (
                                <Errors errorText={'Prénom non valide'} />
                            )
                        }
                        if (!values.lastName) {
                            errors.lastName = (
                                <Errors
                                    errorText={'Veuillez remplir ce champs'}
                                />
                            )
                        } else if (
                            !/^[A-Za-z][^0-9_!¡?÷?¿+=@#$%ˆ&*¨(){}|~<>;:[\]]{1,20}$/i.test(
                                values.lastName
                            )
                        ) {
                            errors.lastName = (
                                <Errors errorText={'Nom non valide'} />
                            )
                        }
                        return errors
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
                            <InputFirstName
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            <InputLastName
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            <InputAvatar
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.avatar}
                            />
                            <div className="flex justify-center m-8">
                                <Button
                                    type="submit"
                                    text="S'inscrire"
                                    color="red"
                                />
                                <LinkButton
                                    to={`/`}
                                    text="Annuler"
                                    color="white"
                                    textColor="red"
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
