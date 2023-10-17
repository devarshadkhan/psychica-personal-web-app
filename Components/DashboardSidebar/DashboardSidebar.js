import React, { useEffect, useState } from "react";
import styles from "../../src/styles/Components/DashboardSidebar.module.css";
import classNames from "classnames";
const DashboardSidebar = (props) => {
  console.log("DATACOMING", props.total_referal);

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    createdAt: "",
    image: "",
  });
  console.log("userdata", userData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const usersInfo = JSON.parse(localStorage.getItem("Information"));

      setUserData({
        first_name: usersInfo?.first_name,
        last_name: usersInfo?.last_name,
        createdAt: usersInfo?.createdAt,
        image: usersInfo?.image,
      });
    }
  }, []);

  const createdAtDate = new Date(userData.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = createdAtDate.toLocaleDateString("en-US", options);

  console.log(formattedDate);

  return (
    <>
      <div className={classNames("text-center", styles.dashboardSidebar)}>
        <img
          src={userData?.image}
          className=""
          alt=""
          // style={{ width: "20%", borderRadius: "50%", height: "103px" }}
        />
        <h5>
          {userData?.first_name} {userData?.last_name}
        </h5>
        <p>Joined {formattedDate}</p>
        {/* <p>Joined  {userData.createdAt}</p> */}

        <div className="d-flex justify-content-center gap-5">
          <div>
            <h5 className="fw-bolder fs-4">{props.total_appointment || 0}</h5>
            <p className="fw-light fs-6">Total Appts.</p>
          </div>
          <div>
            <h5 className="fw-bolder fs-4">{props.total_referal || 0}</h5>
            <p className="fw-light fs-6">Referrals</p>
          </div>
          <div>
            <h5 className="fw-bolder fs-4">{props.membership_type || 0}</h5>
            <p className="fw-light fs-6">Member</p>
          </div>
        </div>

        <div>
          <ul className="list-unstyled">
            <li>
              <a href="">Messenger</a>
            </li>
            <li>
              <a href="">Your Appointments</a>
            </li>
            <li>
              <a href="" className="text-text-decoration-none">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
