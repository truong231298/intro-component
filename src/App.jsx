import { Formik, Form, Field, ErrorMessage } from 'formik';
import iconError from "/images/icon-error.svg";

export default function App() {
  return (
    <main className="min-h-screen flex justify-center bg-Red sm:bg-bg-intro-desktop bg-bg-intro-mobile">
      <section className="max-w-4xl flex sm:flex-row flex-col items-center text-center sm:text-justify p-4">
        <div className="text-white p-2 w-96 mx-10">
          <h1 className="sm:text-4xl text-2xl font-semibold mr-4 mb-4">Learn to code by watching others</h1>
          <p className="text-white">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>

        <div className="flex flex-col gap-2 sm:w-1/2 text-center mt-4 sm:mt-0">
          <span className="py-2 bg-Blue text-white w-full rounded-lg">
            Try it free 7 days <p className="text-GrayishBlue sm:inline-flex">then $20/mo. thereafter</p>
          </span>

          <Formik
            initialValues={{ fName: '', lName: '', email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.fName) {
                errors.fName = 'First Name cannot be empty';
              }
              if (!values.lName) {
                errors.lName = 'Last Name cannot be empty';
              }
              if (!values.email) {
                errors.email = 'Email cannot be empty';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = 'Password cannot be empty';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="bg-white p-4 rounded-lg">
                <div className="field-container">
                  <Field type="text" name="fName" placeholder="First Name" />
                  <ErrorMessage name="fName">
                    {msg => (
                      <div className="error-container">
                        <img src={iconError} alt="error icon" className="absolute sm:ml-8 -translate-y-10 sm:translate-x-80 translate-x-96" />
                        <span className="text-Red float-end">{msg}</span>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="field-container">
                  <Field type="text" name="lName" placeholder="Last Name" />
                  <ErrorMessage name="lName">
                    {msg => (
                      <div className="error-container">
                        <img src={iconError} alt="error icon" className="absolute sm:ml-8 -translate-y-10 sm:translate-x-80 translate-x-96"  />
                        <span className="text-Red float-end">{msg}</span>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="field-container">
                  <Field type="email" name="email" placeholder="Email Address" />
                  <ErrorMessage name="email">
                    {msg => (
                      <div className="error-container">
                        <img src={iconError} alt="error icon" className="absolute sm:ml-8 -translate-y-10 sm:translate-x-80 translate-x-96"  />
                        <span className="text-Red float-end">{msg}</span>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="field-container">
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password">
                    {msg => (
                      <div className="error-container">
                        <img src={iconError} alt="error icon" className="absolute sm:ml-8 -translate-y-10 sm:translate-x-80 translate-x-96"  />
                        <span className="text-Red float-end">{msg}</span>
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-Green text-white uppercase font-semibold w-full rounded-md p-2 mb-2">
                  Claim your free trial
                </button>
                <p className="text-xs text-GrayishBlue inline-block">
                  By clicking the button, you are agreeing to our <span className="text-Red">Terms and Services</span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </main>
  );
}
