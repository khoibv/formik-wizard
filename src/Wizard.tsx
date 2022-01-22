/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withFormik } from "formik";
import { Debug } from "./Debug";

import { Page1 } from "./page1";
import { Page2 } from "./page2";

const required = (value) => (value ? undefined : "Required");

const BaseForm = ({ values, handleSubmit }) => (
  <Router>
    <div className="App">
      <h1>Multistep / Form Wizard updated</h1>
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route
            path="/step1"
            render={(routeProps) => (
              <Page1 {...routeProps} required={required} />
            )}
          />
          <Route
            path="/step2"
            render={(routeProps) => <Page2 {...routeProps} />}
          />
          <Redirect to="/step1" />
        </Switch>

        <Debug />
      </form>
    </div>
  </Router>
);

export const EnhancedForm = withFormik({
  /* setup initial values */
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    email: "",
    favoriteColor: "",
  }),

  validate: (values, props) => {
    console.log("props", props);
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BaseForm",
})(BaseForm);
