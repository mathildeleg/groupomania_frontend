import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import { customFetch } from '../../helpers/fetch'
import { ClientURL } from '../../helpers/clientURL'
import withPrivateRoute from '../../helpers/withPrivateRoute'
import Errors from '../../components/form/Errors'
import InputPost from '../../components/form/InputPost'

class UpdatePost extends React.Component {
    // allow user to update their post
    updatePost = async (data) => {
        // get post id
        const id = this.props.match.params.postId
        // allow user to update their message (but not the image)
        const updatedComment = await customFetch(
            ClientURL.Forum.updatePost(id),
            {
                postMessage: data.post,
            }
        )
        // redirect to forum so user can see their post has been updated
        this.props.history.push(`/forum`)
        return updatedComment
    }

    // allow user to delete their post
    deletePost = async () => {
        // get post id
        const id = this.props.match.params.postId
        // allow user to delete their post
        const deletePost = await customFetch(ClientURL.Forum.deletePost(id))
        // redirect to forum so user can see their post has been deleted
        this.props.history.push(`/forum`)
        return deletePost
    }

    render() {
        return (
            <div className="bg-white dark:bg-pink-dark h-screen flex items-center">
                <div className="bg-pink dark:bg-blue m-4 p-2 rounded-lg flex flex-col w-full">
                    <Formik
                        initialValues={{ post: '' }}
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
                            this.updatePost(values)
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
                                {errors.post && touched.post && errors.post}
                                <div className="flex justify-center">
                                    <div className="flex flex-col justify-center pt-8">
                                        <Button
                                            type="submit"
                                            text="Modifier le post"
                                            color="pink"
                                            disabled={isSubmitting}
                                        />
                                        <Button
                                            onClick={this.deletePost}
                                            text="Supprimer le post"
                                            color="pink"
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                    <div className="flex justify-center">
                        <LinkButton
                            to={`/forum`}
                            text="Annuler"
                            textColor="red"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(UpdatePost)
