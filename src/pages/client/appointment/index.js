import React from "react";
import Header from "../../../../Components/Header/Header";
import styles from "../../../styles/Appointment/Appointment.module.css"
import classNames from "classnames";
const index = () => {
  const date = new Date();

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
  return (
    <>
      <Header />

      <div className="appointment mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex justify-content-between">
                <h4 className="fs-6">Appointment History</h4>
                <h5 className="fs-6">View Entire Appointment History</h5>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Appointment with Tina W.</th>
                    <th scope="col">Type</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-lighter">
                      career {formattedDate},{"  "}
                      {formattedTime}
                    </th>
                    <td className="fw-bold">career</td>
                    <td className="fw-bold">32:12</td>
                    <td className="fw-bold">Paid</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-5 px-5">
             <div className="d-flex justify-content-between mb-4">
             <h4>Today Appointments</h4>
              
             </div>
              <img src="https://www.koimoi.com/wp-content/new-galleries/2023/05/when-shah-rukh-khan-gave-his-two-cents-on-terrorism-islam-requesting-people-001.jpg"  className={styles.curnAppntImg} alt="" style={{width:"100%", position:"relative", height:"200px",borderRadius:"10px"}} />
              <button className={classNames("btn btn-primary",styles.btn_Join)}>Join now</button>
              <div className="d-flex justify-content-between mt-4">
                <h6>Michael Williams</h6>
                <p>12PM CST</p>
              </div>
              <p>Love</p>
    <hr />
              <div className="d-flex justify-content-between">
                <h5>30 Minutes</h5>
                <p>PAID: $39.25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
