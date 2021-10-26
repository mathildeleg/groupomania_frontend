import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import InputComment from '../../components/form/InputComment'
import Errors from '../../components/form/Errors'

class AddComment extends React.Component {
    addComment = async (data) => {
        const id = this.props.match.params.postId
        const createComment = await customFetch(
            ClientURL.Forum.addComment(id),
            {
                commentMessage: data.comment,
                postId: data.postId,
            }
        )
        this.props.history.push(`/forum/post/${id}/comment`)
        return createComment
    }

    render() {
        const id = this.props.match.params.postId
        return (
            <div className="bg-white dark:bg-blue h-screen flex items-center">
                <div className="bg-pink dark:bg-pink-dark m-4 rounded-lg flex flex-col w-full">
                    <Formik
                        initialValues={{ comment: '' }}
                        validate={(values) => {
                            const errors = {}
                            if (!values.comment) {
                                errors.comment = (
                                    <Errors
                                        errorText={'Veuillez remplir ce champs'}
                                    />
                                )
                            }
                            return errors
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.addComment(values)
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
                                <InputComment
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                />
                                {errors.comment &&
                                    touched.comment &&
                                    errors.comment}
                                <div className="flex justify-center pt-8">
                                    <LinkButton
                                        to={`/forum/post/${id}/comment`}
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
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(AddComment)
