import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import LoginLeftSide from "../assets/images/loginLeftSide.gif";

const Login = () => (
  <div className="loginbg">
    <div className="container">
      <div className="loginContent">
        <div className="row">
          <div className="col-lg-7 pe-lg-0">
            <div className="login--leftSide-content">
              <img src={LoginLeftSide} />
            </div>
          </div>
          <div className="col-lg-5 ps-lg-0">
            <div className="login--rightSide-content">
              <h1>Login</h1>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                  console.log(JSON.stringify(values, null, 2));
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="testFiled">
                      <div>
                        <label>Email</label>
                      </div>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className="textFiled">
                      <div>
                        <label>Password</label>
                      </div>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
