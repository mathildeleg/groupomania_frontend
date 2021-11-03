import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/Button'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import InputComment from '../../components/form/InputComment'
import Errors from '../../components/form/Errors'
import LinkButton from '../../components/LinkButton'

class UpdateComment extends React.Component {
    // fetch comment to allow user to update it
    updateComment = async (data) => {
        // get post id
        const id = this.props.match.params.postId
        // get comment id
        const commentId = this.props.match.params.commentId
        // allow user to update comment
        const updatedComment = await customFetch(
            ClientURL.Forum.updateComment(id, commentId),
            {
                commentMessage: data.comment,
            }
        )
        // redirect to comment so that user can see it's been updated
        this.props.history.push(`/forum/post/${id}/comment/${commentId}`)
        return updatedComment
    }

    render() {
        // get post id
        const id = this.props.match.params.postId
        return (
            <div className="bg-white dark:bg-pink-dark h-screen flex items-center">
                <div className="bg-pink dark:bg-blue m-4 rounded-lg flex flex-col w-full">
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
                            this.updateComment(values)
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
                                <div className="flex justify-center">
                                    <div className="flex flex-col justify-center pt-8">
                                        <Button
                                            type="submit"
                                            text="Modifier le commentaire"
                                            color="pink"
                                            disabled={isSubmitting}
                                        />
                                        <LinkButton
                                            text="Annuler"
                                            color="white"
                                            textColor="red"
                                            to={`/forum/post/${id}/comment`}
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

export default withPrivateRoute(UpdateComment)
