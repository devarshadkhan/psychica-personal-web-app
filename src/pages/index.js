import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DatePicker from "react-date-picker";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, onChange] = useState(new Date());
  const router = useRouter()
  useEffect(() => {
    router.push("/client/signup")
  }, [])
  
  return (
    <>

      {/* <div className="wrap-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Client Signup</h2>
            </div>
            <div className="col-md-6">
              <form action="">
                <div className="d-flex gap-5 mt-5">
                  <div class="form-floating mb-3 w-100">
                    <input
                      type="text"
                      class="form-control w-100"
                      id="floatingInput"
                      placeholder="jhon"
                    />
                    <label for="floatingInput">FIRST NAME</label>
                  </div>
                  <div class="form-floating mb-3 w-100">
                    <input
                      type="text"
                      class="form-control w-100"
                      id="floatingInput"
                      placeholder="deo"
                    />
                    <label for="floatingInput">LAST NAME</label>
                  </div>
                </div>
                <div className="mb-4 mt-2">
                  <DatePicker onChange={onChange} value={value} />
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingInput"
                    placeholder=""
                  />
                  <label for="floatingInput">ZIP CODE</label>
                </div>
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">Male</option>
                    <option value="2">Femal</option>
                  </select>
                  <label for="floatingSelect">GENDER</label>
                </div>

                <div>
                  <button className="btn btn-primary">Next</button>
                </div>
              </form>

              <p>Already have an account? <a href="">Login</a></p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
