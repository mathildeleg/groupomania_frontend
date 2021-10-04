import { Formik } from 'formik'
import React from 'react'
import Button from '../components/Button'
import { customFetch } from '../helpers/fetch'
import { ClientURL } from '../helpers/clientURL'
import withPrivateRoute from '../helpers/withPrivateRoute'
import InputComment from '../components/form/InputComment'
import Errors from '../components/form/Errors'

class AddComment extends React.Component {
    addComment = async (data) => {
        const id = this.props.match.params.postId
        const createComment = await customFetch(
            ClientURL.Forum.addComment(id),
            {
                commentMessage: data.comment,
            }
        )
        this.props.history.push(`/forum/post/${id}/comment`)
        return createComment
    }

    render() {
        return (
            <div className="bg-pink m-4 rounded-lg flex">
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
                        } else if (
                            !/^[A-Za-z][^0-9_!¡?÷?¿+=@#$%ˆ&*¨(){}|~<>;:[\]]{1,150}$/i.test(
                                values.comment
                            )
                        ) {
                            errors.comment = (
                                <Errors
                                    errorText={'Commentaire non valide'}
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
                            className="flex flex-col justify-center w-screen p-4"
                            onSubmit={handleSubmit}
                        >
                            <InputComment
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                            />
                            {errors.comment && touched.comment && errors.comment}
                            <div className="flex justify-center pt-8">
                                <Button
                                    type="submit"
                                    text="Publier le commentaire"
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

export default withPrivateRoute(AddComment)
