import React, { useEffect, useState } from "react";
import Header from "../../../../../Components/Header/Header";
import { useRouter } from "next/router";
import styles from "../../../../styles/Dashboard/ExploreCategory.module.css";
import classNames from "classnames";
import axiosInstance from "@/api/interceptor";
import { API } from "@/api/apiendpoint";
import { AiOutlineArrowLeft } from "react-icons/Ai";
const index = () => {
  const router = useRouter();
  const {id,type} = router.query
  const [getPsychicsDetail,setGetPsychicsDetail] = useState("")
  console.log("getPsychicsDetail",getPsychicsDetail)
  const get_category_By_Detail = async () => {
    await axiosInstance
      .get(`${API.getProfessionalbyID}/${id}`)

      .then((res) => {
        setGetPsychicsDetail(res.data?.user)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if(id){
      get_category_By_Detail();
    }
  }, [id]);
  return (
    <>
      <Header />
      {/* {query.id} */}
      <div className="detail_page py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div>
              <p style={{cursor:"pointer"}} onClick={()=>router.back()}><AiOutlineArrowLeft/> Back to {type} Psychics</p>
            </div>
              <div>
                <img
                  src={getPsychicsDetail?.backgroundImge}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    height: "400px",
                  }}
                />
              </div>
            </div>

            <div className="col-md-7 py-5">
              <div className="leftBar py-5">
                <h2>{getPsychicsDetail?.first_name}{" "}{getPsychicsDetail?.last_name}</h2>

                <div className="d-flex gap-2">
                    <p>
                      {getPsychicsDetail?.abilities?.map((ele,index) => {
                        return <>  {index !== 0 && ", "}
                            {ele}</>;
                      })}
                    </p>

                    <p>
                      {getPsychicsDetail?.topics?.map((ele, index) => {
                        return (
                          <>
                            {index !== 0 && ", "}
                            {ele}
                          </>
                        );
                      })}
                    </p>
                    <p>
                      {getPsychicsDetail?.specialities?.map((ele) => {
                        return <>{ele}</>;
                      })}
                    </p>
                  </div>

                <p>
                  {getPsychicsDetail?.bio}
                </p>
              </div>

              <div>
                <h3>Psychic Tools</h3>
                <ul className="list-unstyled mt-5">
                  <li>
                    <a href="">Tarot Cards</a>
                  </li>
                  <li>
                    <a href="">Tarot Cards</a>
                  </li>
                  <li>
                    <a href="">Tarot Cards</a>
                  </li>
                  <li>
                    <a href="">Tarot Cards</a>
                  </li>
                  <li>
                    <a href="">Tarot Cards</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-5 px-5 py-5">
              <div className={styles.leftSideInfo}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="d-flex gap-2 align-items-center m-0">
                    <span></span>${getPsychicsDetail?.actual_rate}<p className="m-0">/minute</p>
                  </h5>
                  <img
                  src={getPsychicsDetail?.backgroundImge}
                    alt=""
                    style={{
                      width: "12%",
                      borderRadius: "50%",
                      height: "48px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="d-flex align-items-center gap-2">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png"
                    alt=""
                    style={{ width: "3%", objectFit: "contain" }}
                  />

                  <h5 className="m-0">{getPsychicsDetail?.review}</h5>
                  <span>({getPsychicsDetail?.review} reviews)</span>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-5">
                  <div>
                    <h6>Status</h6>
                    <p className="m-0">Available</p>
                  </div>
                  <div>
                    <h6>Estimated Wait</h6>
                    <p className="m-0">0 minutes</p>
                  </div>
                  <div>
                    <h6>Time Minimum</h6>
                    <p className="m-0">30 minutes</p>
                  </div>
                </div>

                <div className="d-flex justify-content-around mt-5">
                  <button
                    className={classNames("btn btn-primary", styles.learnBtn)}
                  >
                    Learn About 
                  </button>
                  <button
                    className={classNames("btn btn-primary", styles.meetBtn)}
                  >
                    Meet With 
                  </button>
                </div>

             <div className="py-5">
             <table class="table">
                 
                  <tbody>
                    <tr>
                      <th scope="row" className="fs-6">$0.80 X 30 minute minimum</th>
                      <td>$24</td>
                    </tr>
                    <tr>
                      <th scope="row">Platform fee</th>
                      <td>$10</td>

                    </tr>
                    <tr>
                      <th scope="row">Save 10% w/ Profesy+</th>
                      <td colspan="2">-$3.40</td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td colspan="2">$30.40</td>
                    </tr>
                  </tbody>
                </table>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
