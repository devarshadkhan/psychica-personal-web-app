import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import DatePicker from "react-date-picker";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "../../../styles/signup/Main.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AuthNavbar from "../../../../Components/AuthNavbar/AuthNavbar";
import classNames from "classnames";

export default function Index() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  const [value, onChange] = useState(new Date());
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();
  const dobRef = useRef();
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const onSubmit = (data) => console.log(data);
  const validateZipCode = (value) => {
    const regex = /^\d{6}(?:[-\s]\d{5})?$/;
    if (!value.match(regex)) {
      return "Please enter a valid ZIP code";
    }
    return true;
  };

  const next_page = (e) => {
    e.preventDefault();
    const data = getValues();
    localStorage.setItem("data", JSON.stringify(data));
    trigger()
      .then((res) => {
        console.log(res);
        if (res) {
          //   const data = getValues();
          router.push("/client/signup/helpus");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    if (startDate) {
      setValue(
        "dob",
        `${("0" + (startDate.getMonth() + 1)).slice(
          -2
        )}/${startDate.getDate()}/${startDate.getFullYear()}`
      );
    }
  }, [startDate]);
  return (
    <>
      <AuthNavbar />
      <div className="wrap-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Client Signup</h2>
            </div>
            <div className="col-md-6">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <div>
                <div className="d-flex gap-5 mt-5">
                  <div class="form-floating mb-3 w-100">
                    <input
                      type="text"
                      class="form-control w-100"
                      id="floatingInput"
                      placeholder="jhon"
                      {...register("firstName", {
                        required: true,
                        maxLength: 50,
                      })}
                    />
                    <label for="floatingInput">FIRST NAME</label>
                    {errors.firstName?.type === "required" && (
                      <p role="alert" style={{ color: "red" }}>
                        First name is required
                      </p>
                    )}
                  </div>
                  <div class="form-floating mb-3 w-100">
                    <input
                      type="text"
                      class="form-control w-100"
                      id="floatingInput"
                      placeholder="deo"
                      {...register("lastName", {
                        required: true,
                        maxLength: 50,
                      })}
                    />
                    <label for="floatingInput">LAST NAME</label>
                    {errors.lastName?.type === "required" && (
                      <p role="alert" style={{ color: "red" }}>
                        Last name is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4 mt-2">
                  <DatePicker
                    // {...register("DOB", { required: true })}
                    selected={startDate}
                    // ref={dobRef}
                    // popperClassName="custom-calenderPopper-login"
                    // calendarClassName="custom-professionalDatePicker-login"
                    // maxDate={new Date().setFullYear(
                    //   new Date().getFullYear() - 20
                    // )}
                    // scrollableYearDropdown
                    // showYearDropdown={true}
                    // showMonthDropdown={true}
                    // yearDropdownItemNumber={150}
                    // dateFormatCalendar="MMMM"
                    onChange={(date) => setStartDate(date)}
                  />

                  {/* {errors.DOB && (
                    <p style={{ color: "red" }}>DOB is required</p>
                  )} */}

                  {/* <div>
                    {errors.dob && (
                      <span style={{ color: "red" }}>{errors.dob.message}</span>
                    )}
                  </div> */}
                </div>
                <div class="form-floating mb-3">
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
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxLength="5"
                    minLength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="pincode"
                    onInput={(e) =>
                      (e.target.value =
                        e.target.value.match(/^([0-9]{0,7})/)[0])
                    }
                    {...register("zipCode", {
                      required: "ZIP code is required",
                    })}
                  />
                  <label for="floatingInput">ZIP CODE</label>
                  {errors.zipCode && (
                    <p style={{ color: "red" }}>{errors.zipCode.message}</p>
                  )}
                </div>

                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    // {...register("gender",{ required: true })}
                    {...register("gender", {
                      required: true,
                      validate: (value) => {
                        return (
                          value !== "Select Gender" ||
                          "This is A Required Field"
                        );
                      },
                    })}
                  >
                    <option defaultValue hidden>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {/* <select name="gender" class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example" {...register("gender",{ required: true })}>
        <option defaultValue hidden>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select> */}
                  <label for="floatingSelect">GENDER</label>
                  {errors.gender && (
                    <span style={{ color: "red" }}>This is required.</span>
                  )}
                  {/* {errors.gender && <p style={{color:"red"}}>{errors.gender.message}</p>} */}
                </div>

                <div>
                  <button
                    className={classNames(
                      "btn btn-primary mt-5",
                      styles.btnNxt
                    )}
                    onClick={next_page}
                  >
                    Next
                  </button>
                </div>
              </div>

              <p>
                Already have an account? <a href="/client/login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
