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
    updatePost = async (data) => {
        const id = this.props.match.params.postId
        const updatedComment = await customFetch(
            ClientURL.Forum.updatePost(id),
            {
                postMessage: data.post,
            }
        )
        this.props.history.push(`/forum`)
        return updatedComment
    }

    deletePost = async () => {
        const id = this.props.match.params.postId
        const deletePost = await customFetch(ClientURL.Forum.deletePost(id))
        this.props.history.push(`/forum`)
        return deletePost
    }

    render() {
        return (
            <div className="bg-pink m-4 p-2 rounded-lg flex flex-col">
                <div>
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
                            } else if (
                                !/^[A-Za-z][^0-9_!¡?÷?¿+=@#$%ˆ&*¨(){}|~<>;:[\]]{1,150}$/i.test(
                                    values.post
                                )
                            ) {
                                errors.post = (
                                    <Errors errorText={'Message non valide'} />
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
                                <div className="flex justify-center pt-8">
                                    <LinkButton to={`/forum`} text="Annuler" color='red' otherProps='text-white'/>
                                    <Button
                                        type="submit"
                                        text="Modifier le post"
                                        color="pink"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <div>
                    <div className="bg-pink flex justify-center">
                        <button
                            onClick={this.deletePost}
                            className="text-red rounded-xl bg-white text-center font-semibold px-5 py-2 m-2"
                        >
                            Supprimer le post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withPrivateRoute(UpdatePost)
