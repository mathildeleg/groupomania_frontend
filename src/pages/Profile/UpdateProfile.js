import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/Button'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import Errors from '../../components/form/Errors'
import InputEmail from '../../components/form/InputEmail'
import InputFirstName from '../../components/form/InputFirstName'
import InputLastName from '../../components/form/InputLastName'
import InputAvatar from '../../components/form/InputAvatar'
import LinkButton from '../../components/LinkButton'

class UpdateProfile extends React.Component {
    // allow user to update their profile
    updateProfile = async (data) => {
    // allow user to update their profile (not their password though)
        const updatedProfile = await customFetch(
            ClientURL.User.updateProfile(),
            {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                avatar: data.avatar,
            }
        )
        // redirect to their profile so they can see the changes
        this.props.history.push('/profile/me')
        return updatedProfile
    }

    render() {
        return (
            <div className="bg-white dark:bg-pink-dark h-screen flex justify-center items-center">
                <div className="bg-pink dark:bg-blue h-3/4 rounded-lg flex flex-col justify-center items-center">
                    <Formik
                        initialValues={{
                            email: '',
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
                            this.updateProfile(values)
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
                                className="flex flex-col justify-center p-4"
                                onSubmit={handleSubmit}
                            >
                                <InputEmail
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
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
                                <div className="flex justify-center pt-8">
                                    <LinkButton
                                        to={`/profile/me`}
                                        text="Annuler"
                                        color="red"
                                    />
                                    <Button
                                        type="submit"
                                        text="Modifier le profil"
                                        color="pink"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(UpdateProfile)
