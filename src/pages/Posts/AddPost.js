import { Formik } from 'formik'
import React from 'react'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import InputPost from '../../components/form/InputPost'
import InputImage from '../../components/form/InputImage'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import Errors from '../../components/form/Errors'

class AddPost extends React.Component {
    addPost = async (data) => {
        const createPost = await customFetch(ClientURL.Forum.addPost(), {
            postMessage: data.post,
            imagePath: data.image,
        })
        this.props.history.push('/forum')
        return createPost
    }

    render() {
        return (
            <div className="bg-white dark:bg-pink-dark h-screen flex items-center">
                <div className="bg-pink dark:bg-blue rounded-lg flex flex-col m-4 w-full">
                    <Formik
                        initialValues={{ post: '', image: '' }}
                        validate={(values) => {
                            const errors = {}
                            if (!values.post) {
                                errors.post = (
                                    <Errors
                                        errorText={'Veuillez remplir ce champs'}
                                    />
                                )
                            }
                            return errors
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.addPost(values)
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
                                <InputPost
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.post}
                                />
                                {errors.post &&
                                    touched.post &&
                                    errors.post}
                                <InputImage
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.image}
                                />
                                <div className="flex justify-center">
                                    <div className="flex justify-center pt-8">
                                        <LinkButton
                                            to={`/forum`}
                                            text="Annuler"
                                            color="white"
                                            textColor="red"
                                        />
                                        <Button
                                            type="submit"
                                            text="Publier"
                                            color="pink"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(AddPost)
