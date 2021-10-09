import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/Button'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
// import Errors from '../../components/form/Errors'
import InputEmail from '../../components/form/InputEmail'
import InputFirstName from '../../components/form/InputFirstName'
import InputLastName from '../../components/form/InputLastName'
import InputAvatar from '../../components/form/InputAvatar'
import LinkButton from '../../components/LinkButton'

class UpdateProfile extends React.Component {
    updateProfile = async (data) => {
        const updatedProfile = await customFetch(
            ClientURL.User.updateProfile(),
            {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                avatar: data.avatar,
            }
        )
        // this.props.history.push('/profile/me')
        return updatedProfile
    }

    render() {
        return (
            <div className="bg-pink m-4 rounded-lg flex flex-col">
                <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        lastName: '',
                        avatar: '',
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
                            <div className="flex justify-center pt-8">
                            <LinkButton to={`/profile/me`} text="Annuler" color='red'/>
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
        )
    }
}

export default withPrivateRoute(UpdateProfile)
// export default UpdateProfile
