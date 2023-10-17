import React, { useEffect, useState } from "react";
import Header from "../../../../Components/Header/Header";
import DashboardSidebar from "../../../../Components/DashboardSidebar/DashboardSidebar";
import styles from "../../../styles/Dashboard/Dashboard.module.css";
import axiosInstance from "@/api/interceptor";
import { API } from "@/api/apiendpoint";
const index = () => {
  const date = new Date();
  const [dashboardData, setDashboardData] = useState("");
  const day = String(date.getDate()).padStart(2, "0"); // Get the day and pad with leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (months are zero-based) and pad with leading zero if needed
  const year = String(date.getFullYear()); // Get the full year

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  // const hours = String(date.getHours()).padStart(2, '0');       // Get the hours and pad with leading zero if needed
  // const minutes = String(date.getMinutes()).padStart(2, '0');   // Get the minutes and pad with leading zero if needed
  // const seconds = String(date.getSeconds()).padStart(2, '0');   // Get the seconds and pad with leading zero if needed

  // // const formattedTime = `${hours}:${minutes}:${seconds}`;
  // const formattedTime = `${hours}:${minutes} `;

  // console.log(formattedTime);

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  const formattedTime = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes} ${meridiem}`;

  console.log(formattedTime);

  // Get the dashboard data for client...
  const get_Databoard_data = async () => {
    const usersInfo = JSON.parse(localStorage.getItem("Information"));
    await axiosInstance
      .get(`${API.dashboardGetData}/${usersInfo?._id}`)

      .then((res) => {
        console.log("DASHBOARD_DATA", res.data.result);
        setDashboardData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_Databoard_data();
  }, []);

  return (
    <>
      <Header />

      <div className="dashboard mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Dashboard</h2>
            </div>
            <div className="col-md-7">
              <div className="d-flex justify-content-between mt-5">
                <div class="card" style={{ width: " 18rem" }}>
                  <p className="text-center ">Next Appointment</p>
                  <div class="card-body h-25">
                    <h5 class="card-title text-center fw-bold">
                      {/* {formattedDate} */}
                      {dashboardData?.next_appointment_detail?.date.split(
                        " "
                      )[0] || "No appointment available"}
                    </h5>
                    <p class="card-text text-center fw-bolder">
                      {/* {formattedTime} */}

                      {dashboardData?.next_appointment_detail?.time || " "}
                    </p>
                    <div className="text-center mt-4">
                      <a href="#" class="btn btn-primary">
                        view all
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card" style={{ width: " 18rem" }}>
                  <p className="text-center ">Your Wallet</p>
                  <div class="card-body h-25">
                    <h5 class="card-title text-center fw-bold">
                      {/* {formattedDate} */}$
                      {dashboardData?.wallet_amount || 0}
                    </h5>
                    <p class="card-text text-center fw-bolder">
                      {/* {formattedTime} */}
                      This includes referral fees
                    </p>
                    <div className="text-center mt-4">
                      <a href="#" class="btn btn-primary">
                        view all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <DashboardSidebar
                membership_type={dashboardData?.membership_type}
                total_referal={dashboardData?.total_referal}
                total_appointment={dashboardData?.total_appointment}
              />
            </div>

            {/* <div className="col-md-5">
              <aside
                id="default-sidebar"
                class="fixed dark:bg-gray-800  z-40 w-50 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
              >
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <ul class="space-y-2 font-medium">
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span class="ml-3">Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">
                          Kanban
                        </span>
                        <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          Pro
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          3
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">
                          Products
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">
                          Sign In
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">
                          Sign Up
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
