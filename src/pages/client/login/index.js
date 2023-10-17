import { userLogin } from "@/store/client/login";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../styles/login/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import AuthNavbar from "../../../../Components/AuthNavbar/AuthNavbar";
import classNames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/Ai";
const login = () => {
  const {
    register,
    setValue,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const { loading, error } = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = (e) => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };
  // Login API for Client......
  const dispatch = useDispatch();
  const router = useRouter();
  const submitLogin = (data) => {
    dispatch(userLogin(data))
      .then((res) => {
        // router.push("/client/dashboard");

        if (!res?.error) {
          if (res?.payload?.status) {
            router.push("/client/dashboard");
          }
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <AuthNavbar />
      <div className="login mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h2 className={styles.headName}>Client Login</h2>
              <form action="" onSubmit={handleSubmit(submitLogin)}>
                <div class="form-floating mb-3 mt-5">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    name="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <label for="floatingInput">Email address</label>
                  {errors.email && (
                    <p role="alert" style={{ color: "red" }}>
                      Email Address is required
                    </p>
                  )}
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating d-flex">
                  <input
                    type={passwordType}
                    class="form-control"
                    id="floatingPassword"
                    // name="password"
                    placeholder="Password"
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
                  <span
                    className={"input-group-text " + styles.eyeBg}
                    id="basic-addon2"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className={styles.eyeIcon} />
                    ) : (
                      <AiOutlineEye className={styles.eyeIcon} />
                    )}
                  </span>
                  <label for="floatingPassword">Password</label>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      Password must be 8 characters.
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  class={classNames("btn btn-primary mt-5", styles.btnLogin)}
                >
                  {loading ? (
                    <>
                      <div className="">
                        <span
                          className="spinner-border me-2 spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        logging In
                      </div>
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <div>
                <p>
                  Don’t have an account? <a href="/client/signup">Sign up</a>
                </p>
                <p>
                  Forgot your password? <a href="">Reset it</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
