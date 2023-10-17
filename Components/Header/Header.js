import { API } from "@/api/apiendpoint";
import axiosInstance from "@/api/interceptor";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter()
  
  const handleLogout = async () => {
    const Token = (localStorage.getItem("Token"));
    await axiosInstance.post(API.logout, {
      token: Token,
    })
    .then((res)=>{
      localStorage.clear()
      router.push("/client/login")
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/client/dashboard">
            <img src="/images/LoginLogo.png" width={"30%"} alt="" />
          </a>
          <button
            class="navbar-toggler bg-brown"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-black"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/client/dashboard/explorecategory"
                >
                  Explore
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/client/appointment">
                  Appointment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/client/wallet">
                  wallet
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/client/appointment">
                  Settings
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.koimoi.com/wp-content/new-galleries/2023/05/when-shah-rukh-khan-gave-his-two-cents-on-terrorism-islam-requesting-people-001.jpg"
                    className=""
                    alt=""
                    style={{
                      width: "57%",
                      borderRadius: "50%",
                      height: "30px",
                    }}
                  />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      messenger
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/client/profile">
                      your profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={handleLogout} href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
