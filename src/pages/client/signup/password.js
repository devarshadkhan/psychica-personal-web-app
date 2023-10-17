import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/Ai";
import AuthNavbar from "../../../../Components/AuthNavbar/AuthNavbar";
import styles from "../../../styles/login/Login.module.css"

import classNames from "classnames";
const password = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  useEffect(() => {
    validateForm();
  }, [password, confirmPassword]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    let passwordError = "";
    let confirmPasswordError = "";

    if (password.length < 8) {
      passwordError = "Password must be at least 8 characters long.";
    }

    if (confirmPassword !== password) {
      confirmPasswordError = "Passwords do not match.";
    }

    setPasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);

    setFormValid(!passwordError && !confirmPasswordError);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValid) {
      // Handle form submission
    }
  };

  const togglePassword = (e) => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };
  const toggleConfirmPassword = (e) => {
    setShowConfirmPassword(!showConfirmPassword);
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else if (confirmPasswordType === "text") {
      setConfirmPasswordType("password");
    }
  };

  const {
    register,
    setValue,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const next_page = (e) => {
    e.preventDefault();
    const data = getValues();
    localStorage.setItem("password", JSON.stringify(data))
    trigger()
      .then((res) => {
        console.log(res);
        if (res) {
          const data = getValues();
          router.push("/client/signup/privacypolicy");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
    <AuthNavbar/>
      <div className="password mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Create password</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Password:</label>
                  <div className="d-flex align-items-center gap-3">
                    <div className="mb-4">
                      <div className={`input-group rounded`}>
                        <div className="form-floating">
                          <input
                            type={passwordType}
                            className={` form-control`}
                            id="floatingInputPassword"
                            placeholder="Password"
                            // onKeyDown={handleKeyDown}
                            {...register("password", {
                              required: {
                                value: true,
                                message: "This is a Required Field",
                              },
                              // onChange: (e) => {
                              //   const passwordStrengthValue =
                              //     checkPasswordStrength(e.target.value);
                              //   setpasswordStrength(
                              //     passwordStrengthValue
                              //   );
                              // },
                              minLength: {
                                value: 8,
                                message: "password must be 8 charaters long",
                              },
                              maxLength: {
                                value: 8,
                                message: "password must be 8 charaters long",
                              },
                            })}
                          />
                          <label
                            htmlFor="floatingInputPassword"
                            // className={styles.floatingLabel}
                          >
                            Password
                          </label>
                        </div>
                        <span
                          className={"input-group-text "}
                          id="basic-addon2"
                          onClick={togglePassword}
                        >
                          {/* <AiOutlineEyeInvisible/> */}
                          {/* <AiOutlineEye  /> */}
                          {showPassword ? (
                            <>
                              {/* <p>hide</p> */}
                              <AiOutlineEyeInvisible/>
                            </>
                          ) : (
                         <AiOutlineEye/>
                          )}
                        </span>
                      </div>
                      {errors?.password && (
                        <span style={{ color: "red" }}>
                          {errors?.password?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )} */}

                <div className="mb-4">
                  <div className={`input-group  rounded`}>
                    <div className="form-floating">
                      <input
                        type={confirmPasswordType}
                        // onKeyDown={handleKeyDown}
                        className={` form-control`}
                        id="floatingInputPassword"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                          required: {
                            value: true,
                            message: "This is a Required Field",
                          },
                          minLength: {
                            value: 8,
                            message: "password must be 8 charaters long",
                          },
                          maxLength: {
                            value: 8,
                            message: "password must be 8 charaters long",
                          },
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match.",
                        })}
                      />
                      <label
                        htmlFor="floatingInputPassword"
                        // className={styles.floatingLabel}
                      >
                        Confirm Password
                      </label>
                    </div>
                    <span
                      className={"input-group-text "}
                      id="basic-addon2"
                      onClick={toggleConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <>
                              {/* <p>hide</p> */}
                              <AiOutlineEyeInvisible/>
                            </>
                          ) : (
                         <AiOutlineEye/>
                      )}
                    </span>
                  </div>
                  {errors?.confirmPassword && (
                    <span style={{ color: "red" }}>
                      {errors?.confirmPassword?.message}
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <button onClick={next_page} className={classNames("btn btn-primary",styles.btnLogin)}>
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default password;

// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';

// const password = () => {
//     const { register, handleSubmit, errors } = useForm();
//   const [showValidation, setShowValidation] = useState(false);

//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//   const toggleValidation = () => {
//     setShowValidation((prevState) => !prevState);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <>
//          <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Password</label>
//       <input
//         type={showValidation ? 'text' : 'password'}
//         name="password"
//         ref={register("password",{
//           required: 'Password is required',
//           pattern: {
//             value: passwordRegex,
//             message: 'Password must contain at least 8 characters including uppercase letters, lowercase letters, and numbers',
//           },
//         })}
//       />
//       {errors.password && <p>{errors.password.message}</p>}
//       <button type="submit">Submit</button>
//       <label>
//         <input type="checkbox" checked={showValidation} onChange={toggleValidation} />
//         Show full validation
//       </label>
//     </form>
//     </>
//   )
// }

// export default password

// <div className="password mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h2>Create password</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>Password:</label>
//                 <div className="d-flex align-items-center gap-3">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     ref={register("password", {
//                       required: "Password is required",
//                       pattern: {
//                         value: passwordRegex,
//                         message:
//                           "Password must contain at least 8 characters including letters and numbers",
//                       },
//                     })}
//                     onChange={handlePasswordChange}
//                   />
//                   <i
//                     onClick={toggleShowPassword}
//                     className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
//                   ></i>
//                   {/* <button type="button" onClick={toggleShowPassword}>
//                   {showPassword ? "Hide" : "Show"}
//                 </button> */}
//                 </div>
//               </div>

//               {passwordError && (
//                 <div style={{ color: "red" }}>{passwordError}</div>
//               )}

//               <div className="mt-5">
//                 <label>Confirm Password:</label>
//                 <div className="d-flex align-items-center gap-3">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={handleConfirmPasswordChange}
//                   />
//                   {/* <i type="button" onClick={toggleShowConfirmPassword} className={showConfirmPassword?"fa-eye-slash":"fa-fa-eye"}>
//                 {showConfirmPassword?"fa-eye-slash":"fa-eye"}
//                 </i> */}
//                   <i
//                     onClick={toggleShowConfirmPassword}
//                     className={`fa ${
//                       showConfirmPassword ? "fa-eye-slash" : "fa-eye"
//                     }`}
//                   ></i>
//                 </div>
//               </div>
//               {confirmPasswordError && (
//                 <div style={{ color: "red" }}>{confirmPasswordError}</div>
//               )}

//               <div className="mt-5">
//                 <button onClick={next_page} className="btn btn-primary">
//                   Next
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       </div>

// <div className="mt-5">
// <label>Confirm Password:</label>
// <div className="d-flex align-items-center gap-3">
//   <input
//     type={showConfirmPassword ? "text" : "password"}
//     value={confirmPassword}
//     onChange={handleConfirmPasswordChange}
//   />
//   {/* <i type="button" onClick={toggleShowConfirmPassword} className={showConfirmPassword?"fa-eye-slash":"fa-fa-eye"}>
// {showConfirmPassword?"fa-eye-slash":"fa-eye"}
// </i> */}
//   <i
//     onClick={toggleShowConfirmPassword}
//     className={`fa ${
//       showConfirmPassword ? "fa-eye-slash" : "fa-eye"
//     }`}
//   ></i>
// </div>
// </div>
// {confirmPasswordError && (
// <div style={{ color: "red" }}>{confirmPasswordError}</div>
// )}
