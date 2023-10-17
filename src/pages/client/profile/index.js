import React from "react";
import Header from "../../../../Components/Header/Header";
import { AiOutlineCheck, AiOutlineStar } from "react-icons/Ai";
import { TbPencil } from "react-icons/Tb";
import { HiOutlineHome } from "react-icons/Hi";
import { RiRouteFill } from "react-icons/Ri";
import { MdOutlineInsertComment } from "react-icons/MD";

const index = () => {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0"); // Get the day and pad with leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (months are zero-based) and pad with leading zero if needed
    const year = String(date.getFullYear()); // Get the full year
  
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
   
  return (
    <>
      <Header />
      <div className="profile py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className=" mt-4 ">
                {" "}
                <div className="card p-4">
                  {" "}
                  <div className=" image d-flex flex-column justify-content-center align-items-center">
                    {" "}
                    <img
                      src="https://i.imgur.com/wvxPV9S.png"
                      height={100}
                      width={100}
                    />
                    <p className="m-0">
                      <TbPencil /> update Avatar
                    </p>
                    <span
                      className="fw-bold name mt-3"
                      style={{ fontSize: "1.2rem", color: "#000" }}
                    >
                      Eleanor Pena
                    </span>{" "}
                    <div className="d-flex flex-row justify-content-center gap-1 align-items-center mt-3">
                      <p>
                        <AiOutlineStar /> 3 review
                      </p>
                      <p>
                        <AiOutlineCheck /> identity verified
                      </p>
                    </div>
                    <div className=" d-flex mt-2"></div>{" "}
                    <div className="gap-3 mt-2 icons d-flex flex-row justify-content-center align-items-center">
                      {" "}
                      <span>
                        <i className="fa fa-twitter" />
                      </span>{" "}
                      <span>
                        <i className="fa fa-facebook-f" />
                      </span>{" "}
                      <span>
                        <i className="fa fa-instagram" />
                      </span>{" "}
                      <span>
                        <i className="fa fa-linkedin" />
                      </span>{" "}
                    </div>{" "}
                    <hr />
                    <div className=" px-2 rounded  date ">
                      <span className="join">Joined {formattedDate}</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=400"
                  alt=""
                  style={{ width: "100%", height: "200px",borderRadius:"10px" }}
                />
                <div className="text-end mt-2 mb-5">
                <button className="btn btn-primary mb-5">edit cover</button>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-5">
                    <h4 className="fw-bolder">Hi, I’m Kohaku Tora</h4>
                    <button className="btn btn-primary">Edit your profile</button>
              </div>
              <div className="mt-3 mb-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ad repellat tempora fuga! Quae quasi voluptatem odio dolor, magni et expedita omnis blanditiis deleniti, reiciendis veritatis illum cumque enim!</p>
              </div>

              <div className="d-flex gap-4 align-items-center mt-5">
                <HiOutlineHome />
                <span>Live in</span>
                <p className="m-0">Okhla</p>
              </div>
              <div className="d-flex gap-4 align-items-center mt-2">
                <RiRouteFill />
                <span>Identity</span>
                <p className="m-0">verified</p>
              </div>
              <div className="d-flex gap-4 align-items-center mt-2">
                <MdOutlineInsertComment />
                <span>Speaks</span>
                <p className="m-0">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
