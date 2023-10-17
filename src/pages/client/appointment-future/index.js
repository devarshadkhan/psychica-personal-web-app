import React, { useState } from "react";
import Header from "../../../../Components/Header/Header";
import { AiOutlineArrowLeft } from "react-icons/Ai";
import DatePicker, { Calendar } from "react-multi-date-picker";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  console.log("SELECT_DATE", selectedDate);
  const handleDateClick = (date) => {
    setSelectedDate(new Date(date));
    setShowCalendar(true);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleChange = (selectedDate) => {
    setShowCalendar(!showCalendar);
    setSelectedDate(selectedDate);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const getTimeFromOption = (optionValue) => {
  //   switch (optionValue) {
  //     case "1":
  //       return "1:00 PM";
  //     case "2":
  //       return "2:00 PM";
  //     case "3":
  //       return "3:00 PM";
  //     // Add more cases as needed
  //     default:
  //       return "";
  //   }
  // };
  // const renderSelectedOption = () => {
  //   if (selectedOption) {
  //     const time = getTimeFromOption(selectedOption);
  //     return <p>Selected option: {time}</p>;
  //   } else {
  //     return null;
  //   }
  // };

  // function getMonthNameAndNumber(date) {
  //   const options = { month: "long", day: "numeric", year: "numeric" };
  //   const monthName = date.toLocaleString("default", options);
  //   const dateNumber = date.getDate();

  //   return { monthName, dateNumber };
  // }
  // const currentDate = new Date();
  // const { monthName, dateNumber } = getMonthNameAndNumber(currentDate);

  // const getMonthNameAndNumber = (date) => {
  //   const options = { month: 'long', day: 'numeric' };
  //   const monthName = date.toLocaleString('default', options);
  //   const dateNumber = date.getDate(new Date);
  //   return { monthName, dateNumber };
  // };
  // const { monthName, dateNumber } = selectedDate
  //   ? getMonthNameAndNumber(selectedDate)
  //   : {};

  return (
    <>
      <Header />

      <div className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="cursor-pointer" style={{ cursor: "pointer" }} onClick={()=>router.back()}>
                <AiOutlineArrowLeft />
                Back to Schedule Tina Now
              </p>
            </div>

            <div className="col-md-12 mt-4">
              <h4>The Future Is Bright.</h4>
              <p>Book an appointment with Tina W. now.</p>
            </div>

            <div className="col-md-12 mt-5">
              <a href="/client/appointment-future">future</a> and{" "}
              <a href="/client/appointment-now">now</a>
            </div>

            <div className="col-md-3">
              <div className="mt-5">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Meeting Type</option>
                  <option value="1">Appointment via Telephone</option>
                  <option value="2">Appointment via Computer Audio</option>
                  <option value="3">Appointment via Video</option>
                </select>
              </div>
            </div>

            <div className="col-md-1">
              <div>
                <p
                  className="fw-bolder fs-3 mt-5"
                  style={{ cursor: "pointer" }}
                  onClick={toggleCalendar}
                >
                  {showCalendar ? "Date" : "Date"}
                </p>
                {showCalendar && (
                  <Calendar
                    value={selectedDate}
                    onChange={handleChange}
                    onClickDay={handleDateClick}
                    numberOfMonths={2}
                    disableMonthPicker
                    disableYearPicker
                  />
                )}
                {selectedDate && <div>{selectedDate.toString()}</div>}
                {/* {selectedDate && <div>{monthName}, {dateNumber}</div>} */}
                {/* {selectedDate && (
                  <div>
                    {selectedDate.toLocaleString("default", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )} */}
              </div>
            </div>

            <div className="col-md-3 mt-5">
              <select class="form-select" aria-label="Default select example">
                <option selected>Start Time</option>
                <option value="1">1:00 PM</option>
                <option value="2">2:00 PM</option>
                <option value="3">3:00 PM</option>
                <option value="4">4:00 PM</option>
                <option value="5">5:00 PM</option>
              </select>
            </div>
            <div className="col-md-3 mt-5">
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="" disabled>
                    End Time
                  </option>
                  <option value="1">1:00 PM</option>
                  <option value="2">2:00 PM</option>
                  <option value="3">3:00 PM</option>
                  <option value="4">4:00 PM</option>
                  <option value="5">5:00 PM</option>
                  {/* Add more options as needed */}
                </select>
                {/* {renderSelectedOption()} */}
              </div>
            </div>
            <div className="col-md-2 mt-5">
              <button className="btn btn-primary">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

{
  /* <DatePicker
              // selected={startDate}
              // onChange={handleChange}
              // monthsShown={width <= 1024 ? 1 : 2}
              calendarClassName="book-appointment-date"
              // wrapperClassName={` ${styles.calendarWrapper}`}
              popperPlacement="top"
              // disabled={schedule?.schedule_type === "now"}
              // minDate={moment().toDate()}
                  /> */
}

{
  /* <Calendar
  numberOfMonths={2}
  disableMonthPicker
  disableYearPicker
/>  */
}
{
  /* <div>
      
                {showCalendar && <>  <Calendar
                value={selectedDate}
                    onClickDay={handleDateClick}
                    numberOfMonths={2}
                    disableMonthPicker
                    disableYearPicker
                  /></>}

                {selectedDate && (
                  <p>Selected Date: {selectedDate.toString()}</p>
                )}
              </div> */
}
