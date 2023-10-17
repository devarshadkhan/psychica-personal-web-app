import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../styles/login/Login.module.css"
import classNames from "classnames";
import AuthNavbar from "../../../../Components/AuthNavbar/AuthNavbar";
const helpus = () => {
  const router = useRouter();
  const [issues, setIssues] = useState("");
  const [other_issues, setOtherIssues] = useState("");
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const next_page = (e) => {
    e.preventDefault();
    const data = getValues();
    localStorage.setItem("issue", issues)
    localStorage.setItem("other_issues", other_issues)
    trigger()
    
      .then((res) => {
        console.log(res);
        if (res) {
          //   const data = getValues();
          router.push("/client/signup/password");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <>
    <AuthNavbar/>
      <div className="wrap-2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Help us, help you</h2>

              <form>
              <div className="mt-5">
                <p>I’m having issues with </p>
                <div class="form-floating">
                  <select
                   onChange={(e) => setIssues(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    // {...register("issue", {
                    //   required: true,
                    //   validate: (value) => {
                    //     return (
                    //       value !== "Select Gender" ||
                    //       "This is A Required Field"
                    //     );
                    //   },
                    // })}
                  >
                    <option defaultValue hidden>Select Your Issues</option>
                    <option value="A recent loss in family">A recent loss in family</option>
                    <option value="Faced recent Failure">Faced recent Failure</option>
                  </select>
                  <label for="floatingSelect">Select Your Issues</label>
                  {/* {errors.issue && (
                    <span style={{ color: "red" }}>This is required.</span>
                  )} */}
                </div>
              </div>

              <div className="mt-5">
                <p>Select any other issues you’re facing</p>
                <div class="form-floating">
                  <select
                    onChange={(e) => setOtherIssues(e.target.value)}
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Select Your Issues with</option>
                    <option value="Issues with love / relationships">Issues with love / relationships</option>
                    <option value="A recent loss in familye">A recent loss in familye</option>
                  </select>
                  <label for="floatingSelect">Select Your Issues</label>
                </div>
              </div>

              <div className="mt-5">
                <button className={classNames("btn btn-primary",styles.btnLogin)} onClick={next_page} disabled={!issues || !other_issues}>Next</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default helpus;
