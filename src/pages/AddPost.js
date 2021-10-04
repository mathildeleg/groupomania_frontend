import { Formik } from 'formik'
import React from 'react'
import { customFetch } from '../helpers/fetch'
import { ClientURL } from '../helpers/clientURL'
import withPrivateRoute from '../helpers/withPrivateRoute'
import InputPost from '../components/form/InputPost'
import InputImage from '../components/form/InputImage'
// import Errors from '../components/form/Errors'

class AddPost extends React.Component {
    addPost = async (data) => {
        const createPost = await customFetch(ClientURL.Forum.addPost(), {
            postMessage: data.postMessage,
            imagePath: data.imagePath,
        })
        this.props.history.push('/forum')
        return createPost
    }

    render() {
        return (
            <div className="bg-pink m-4 rounded-lg flex">
                <Formik
                    initialValues={{ postMessage: '', imagePath: '' }}
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
                            className="flex flex-col justify-center w-screen p-4"
                            onSubmit={handleSubmit}
                        >
                            <InputPost
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.postMessage}
                            />
                            <InputImage
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.imagePath}
                            />
                            <div className="flex justify-center pt-8">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`bg-white rounded-xl text-red bg-red text-center font-semibold px-5 py-2 m-2`}
                                >
                                    Publier
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default withPrivateRoute(AddPost)
