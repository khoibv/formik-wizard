import { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export const Page2 = () => (
  <Fragment>
    <div>
      <label>Email</label>
      <Field name="email" component="input" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="field-error" />
    </div>
    <div>
      <label>Favorite Color</label>
      <Field name="favoriteColor" component="select">
        <option value="">Select a Color</option>
        <option value="#ff0000">❤️ Red</option>
        <option value="#00ff00">💚 Green</option>
        <option value="#0000ff">💙 Blue</option>
      </Field>
      <ErrorMessage
        name="favoriteColor"
        component="div"
        className="field-error"
      />
    </div>
    <Link to="/step1">
      <button type="button">Previous</button>
    </Link>
    <button type="submit">Submit</button>
  </Fragment>
);
