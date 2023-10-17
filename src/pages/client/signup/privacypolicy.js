import { clientSignUp } from "@/store/client/signup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import AuthNavbar from "../../../../Components/AuthNavbar/AuthNavbar";
import styles from "../../../styles/login/Login.module.css";
import classNames from "classnames";
const privacypolicy = () => {
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const router = useRouter();
  const [socialMedia, setSocialMedia] = useState("");
  const [CaliforniaPsychics, setCaliforniaPsychics] = useState(
    "California Psychics"
  );
  const [toggle, setToggle] = useState("");
  const isSubmitDisabled = socialMedia === "" || toggle === "";

  const { loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const signUp = (data) => {
    data.preventDefault();
    const datase = getValues();
    localStorage.setItem(
      "CaliforniaPsychics",
      JSON.stringify(CaliforniaPsychics)
    );
    localStorage.setItem("socialMedia", socialMedia);

    dispatch(clientSignUp(data));
    localStorage.clear();
    trigger()
      .then((res) => {
        if (res) {
          router.push("/client/login");
        }
        // if (!res?.error) {
        //   if(res?.payload?.status){
        //     router.push("/client/login");
        //   }
        // }
      })
      .catch((err) => {
        toast(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      <AuthNavbar />
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
      <div className="privacyPolicy mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1>Last thing!</h1>
                <p>
                  We love hearing about how our users find our platform, as it
                  helps us expand to a larger user base, which in turn helps
                  lower our rates.
                </p>
              </div>
              <div className="mt-5 mb-5">
                <div class="ting">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    onChange={(e) => setCaliforniaPsychics(e.target.value)}
                  >
                    <option value={CaliforniaPsychics} selected>
                      California Psychics
                    </option>
                  </select>
                  {/* <label for="floatingSelect">Works with selects</label> */}
                </div>
              </div>

              <div class="formfloating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  onChange={(e) => setSocialMedia(e.target.value)}
                >
                  <option selected>Select platform</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                </select>
              </div>

              <div class="form-check form-switch mt-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  required
                  onChange={(e) => setToggle(e.target.value)}
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  I agree to the Profesy Terms and Conditions
                </label>
              </div>

              <div>
                <button
                  className={classNames(
                    "btn btn-primary mt-5",
                    styles.btnLogin
                  )}
                  disabled={isSubmitDisabled}
                  onClick={signUp}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default privacypolicy;
