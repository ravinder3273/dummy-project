import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import LoginLeftSide from "../assets/images/loginLeftSide.gif";

const SignUp = () => (
  <div className="loginbg">
    <div className="container">
      <div className="loginContent">
        <div className="row">
          <div className="col-lg-6 pe-lg-0">
            <div className="login--leftSide-content"></div>
          </div>
          <div className="col-lg-6 ps-lg-0">
            <div className="login--rightSide-content">
              <h1>SignUp</h1>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  localStorage.setItem("key", JSON.stringify(values));
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="textFiled">
                          <div>
                            <label>First Name</label>
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={values.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="textFiled">
                          <div>
                            <label>Last Name</label>
                          </div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="textFiled">
                          <div>
                            <label>Email</label>
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="textFiled">
                          <div>
                            <label>Password</label>
                          </div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                          />
                        </div>
                      </div>
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

export default SignUp;
