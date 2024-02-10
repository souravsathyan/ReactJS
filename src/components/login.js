import * as Yup from "yup"
import { Formik } from "formik"
import useLocalStorage from "../utils/useLocalStorage"
import { useNavigate } from "react-router-dom"
import userContext from "../utils/userContext"
import { useContext } from "react"

// create schema using Yup
const schema = Yup.object().shape({
    email: Yup.string().required('email is a required field').email("Enter a Valid Email"),
    password: Yup.string().required('Password is required').min(8, "password must be 8 characters")
})

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const navigate = useNavigate()
    const [getLocalStorage, setLocalStorage] = useLocalStorage("user")
    const { setUserName } = useContext(userContext)

    const handleSubmit = (values) => {
        let index = values?.email.indexOf('@')
        let name = values?.email.slice(0, index)

        const randomStringWithChar = () => {
            return [...Array(100)]
                .map(
                    () => Math.random().toString(36)[2]
                ).join("")
        }

        setLocalStorage({
            ...getLocalStorage,
            "userName": name,
            "token": randomStringWithChar()
        })
        navigate(-1)
        setUserName(name)
    }


    return (
        <div className="login-form-container">
            <h3>Login Form</h3>
            <div>
                <Formik
                    validationSchema={schema}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        handleSubmit(values)
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
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Enter email"
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                autoComplete="on"
                                placeholder="Enter password"
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default Login