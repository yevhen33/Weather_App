import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IAppForm } from '../../../types/forms.type';
import { saveFormToLocalStorage } from '../../../services/handlerFormLocalStorage';
import { formSchema } from './appForm.utils';
import './appForm.scss';

function AppForm(): React.ReactElement {
  const initialValues: IAppForm = {
    name: '',
    email: '',
    random: 0,
    rating: '',
    text: '',
    terms: false
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        saveFormToLocalStorage(values);
        resetForm();
      }}>
      <Form className="form">
        <h2>Send Feedback</h2>
        <div className="form__group">
          <label htmlFor="name">Full name*</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage className="form__error" name="name" component="div" />
        </div>
        <div className="form__group">
          <label htmlFor="email">E-mail*</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage className="form__error" name="email" component="div" />
        </div>
        <div className="form__group">
          <label htmlFor="random">Enter a random positive number*</label>
          <Field id="random" name="random" type="number" />
          <ErrorMessage className="form__error" name="random" component="div" />
        </div>
        <div className="form__group">
          <label htmlFor="rating">How would you rate the app</label>
          <Field id="rating" name="rating" as="select">
            <option value="">Choose one of the options</option>
            <option value="VG">Very good</option>
            <option value="G">Good</option>
            <option value="B">Bad</option>
            <option value="VB">Very bad</option>
          </Field>
          <ErrorMessage className="form__error" name="rating" component="div" />
        </div>
        <div className="form__group">
          <label htmlFor="text">Your message</label>
          <Field id="text" name="text" as="textarea" />
          <ErrorMessage className="form__error" name="text" component="div" />
        </div>
        <div className="form__group">
          <label className="checkbox">
            <Field name="terms" type="checkbox" />
            Do you agree with the &nbsp;
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              privacy policy
            </a>
            ?
          </label>
          <ErrorMessage className="form__error" name="terms" component="div" />
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </Form>
    </Formik>
  );
}

export default AppForm;
