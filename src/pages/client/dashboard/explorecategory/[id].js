import React, { useEffect, useState } from "react";
import Header from "../../../../../Components/Header/Header";
import { useRouter } from "next/router";
import { API } from "@/api/apiendpoint";
import axiosInstance from "@/api/interceptor";
import styles from "../../../../styles/Dashboard/ExploreCategory.module.css";
import classNames from "classnames";
const explorepsy = () => {
  const router = useRouter();
  const { type } = router.query;
  const [noData, setNoData] = useState(true);
  const [explorePsychiccategory, setExplorePsychiccategory] = useState();
  const [promotionPsychics, setPromotionPsychics] = useState([]);
  const [promotedPsychics, setPromotedPsychics] = useState([]);
  const [available, setAvailable] = useState([]);
  console.log("RESPONSE_API", available);
  // Normal fake Data
  const data = [
    {
      id: 1,
      img: "https://images.indianexpress.com/2023/04/shah-rukh-khan.jpg",
      name: "Shah rukh khan",
      min: 80,
      category: [
        {
          cateName: "Empath, Medium, Clairvoyant",
        },
      ],
    },
    {
      id: 2,
      img: "https://images.indianexpress.com/2023/04/shah-rukh-khan.jpg",
      name: "Pathaan",
      min: 80,
      category: [
        {
          cateName: "Empath, Medium, Clairvoyant",
        },
      ],
    },
  ];

  // dynamic psyphics profile page...
  const Detail_Page = (id) => {
    router.push(`/client/dashboard/explorecategorydetail/${id}?type=${type}`);
  };

  // professional Psychics for listing...

  const get_category = async () => {
    await axiosInstance
      .get(`${API.exploreByCategory}?type=${type}`)

      .then((res) => {
        setNoData(false);
        // this psychics for first for the 0 index
        setExplorePsychiccategory(res.data.professnial[0]);
        // this psychics for promotion
        setPromotionPsychics(res.data.professnial[1]);
        setPromotedPsychics(res.data.professnial[2]);
        setAvailable(res.data.professnial.slice(3));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (type) {
      get_category();
    }
  }, [type]);

  return (
    <>
      <Header />
      {noData.length === 0 ? (
        <>
          <h1>NO Data Available</h1>
        </>
      ) : (
        <>
          <div className="explorepsy py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h4>Explore {type} Psychics</h4>
                </div>

                {/* {
            explorePsychiccategort && Array.isArray(explorePsychiccategort) &&
            explorePsychiccategort?.map((ele)=>{
              return(
                <>
                
                </>
              )
            })
          } */}

                <div className="col-md-6">
                  <h5>
                    {explorePsychiccategory?.first_name}{" "}
                    {explorePsychiccategory?.last_name}
                  </h5>

                  {/* <p>{explorePsychiccategort?.topics?.map((ele)=>{ele})}, Medium, Clairvoyant</p> */}

                  <div className="d-flex gap-2">
                    <p>
                      {explorePsychiccategory?.abilities?.map((ele) => {
                        return <>{ele}</>;
                      })}
                    </p>

                    <p>
                      {explorePsychiccategory?.topics?.map((ele, index) => {
                        return (
                          <>
                            {index !== 0 && ", "}
                            {ele}
                          </>
                        );
                      })}
                    </p>
                    <p>
                      {explorePsychiccategory?.specialities?.map((ele) => {
                        return <>{ele}</>;
                      })}
                    </p>
                  </div>

                  <div>
                    <img
                      src={explorePsychiccategory?.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "350px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6 px-5">
                  <div className={styles.leftSideInfo}>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="d-flex gap-2 align-items-center m-0">
                        <span></span>${explorePsychiccategory?.actual_rate}
                        <p className="m-0">/minute</p>
                      </h5>
                      <img
                        src={explorePsychiccategory?.image}
                        alt=""
                        style={{
                          width: "12%",
                          borderRadius: "50%",
                          height: "60px",
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

                      <h5 className="m-0">{explorePsychiccategory?.review}</h5>
                      <span>({explorePsychiccategory?.review} reviews)</span>
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
                        className={classNames(
                          "btn btn-primary",
                          styles.learnBtn
                        )}
                        onClick={() => Detail_Page(explorePsychiccategory?._id)}
                      >
                        Learn About
                      </button>
                      <button
                        className={classNames(
                          "btn btn-primary",
                          styles.meetBtn
                        )}
                        onClick={() =>
                          router.push("/client/appointment-future")
                        }
                      >
                        Meet With
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mt-5">
                  <h2>{type} Psychics Recommended For You</h2>
                </div>

                {/* {
              promotionPsychics?.map((item) => {
                console.log("DATA_ITEM",item)
              return (
                <> */}
                <div className="col-md-6 mt-4">
                  <div
                    class="card"
                    onClick={() => Detail_Page(promotionPsychics?._id)}
                  >
                    <img
                      src={promotionPsychics?.image}
                      class="card-img-top"
                      height={"400px"}
                    />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 class="card-title">
                          {promotionPsychics?.first_name}{" "}
                          {promotionPsychics?.last_name}
                        </h5>
                        <p>${promotionPsychics?.actual_rate}/minute</p>
                      </div>
                      <div>
                        <span>
                          {promotionPsychics?.topics?.map((ele, index) => {
                            return (
                              <>
                                {index !== 0 && ", "}
                                {ele}
                              </>
                            );
                          })}
                          ,{" "}
                          {promotionPsychics?.abilities?.map((ele, index) => {
                            return (
                              <>
                                {index !== 0 && ", "}
                                {ele}
                              </>
                            );
                          })}
                          ,{" "}
                          {promotionPsychics?.specialities?.map(
                            (ele, index) => {
                              return (
                                <>
                                  {index !== 0 && ", "}
                                  {ele}
                                </>
                              );
                            }
                          )}
                        </span>
                      </div>
                      <hr />
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0">0m Est. Wait</p>
                      <div className="d-flex align-items-center gap-2 justify-content-end">
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png"
                          alt=""
                          style={{ width: "6%", objectFit: "contain" }}
                        />

                        <h5 className="m-0">{promotionPsychics?.review}</h5>
                        <span>({promotionPsychics?.review} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div
                    class="card"
                    onClick={() => Detail_Page(promotedPsychics?._id)}
                  >
                    <img
                      src={promotedPsychics?.image}
                      class="card-img-top"
                      height={"400px"}
                    />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 class="card-title">
                          {promotedPsychics?.first_name}{" "}
                          {promotedPsychics?.last_name}
                        </h5>
                        <p>${promotedPsychics?.actual_rate}/minute</p>
                      </div>
                      <div>
                        <span>
                          {promotedPsychics?.topics?.map((ele, index) => {
                            return (
                              <>
                                {index !== 0 && ", "}
                                {ele}
                              </>
                            );
                          })}
                          ,{" "}
                          {promotedPsychics?.abilities?.map((ele, index) => {
                            return (
                              <>
                                {index !== 0 && ", "}
                                {ele}
                              </>
                            );
                          })}
                          ,{" "}
                          {promotedPsychics?.specialities?.map((ele, index) => {
                            return (
                              <>
                                {index !== 0 && ", "}
                                {ele}
                              </>
                            );
                          })}
                        </span>
                      </div>
                      <hr />
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <p className="m-0">0m Est. Wait</p>
                      <div className="d-flex align-items-center gap-2 justify-content-end">
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png"
                          alt=""
                          style={{ width: "6%", objectFit: "contain" }}
                        />

                        <h5 className="m-0">{promotedPsychics?.review}</h5>
                        <span>({promotedPsychics?.review} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </>
              );
            })} */}
                {available?.map((ele) => {
                  return (
                    <>
                      <div className="col-md-4 mt-5">
                        <div class="card" onClick={() => Detail_Page(ele._id)}>
                          <img
                            src={ele?.image}
                            style={{ height: "200px" }}
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <div className="d-flex justify-content-between">
                              <h5 class="card-title">
                                {ele?.first_name} {ele?.last_name}
                              </h5>
                              <p>${ele?.actual_rate}/minute</p>
                            </div>
                            <div>
                              <span>
                                {ele?.topics?.map((ele, index) => {
                                  return (
                                    <>
                                      {index !== 0 && ", "}
                                      {ele}
                                    </>
                                  );
                                })}
                                ,{" "}
                                {ele?.abilities?.map((ele, index) => {
                                  return (
                                    <>
                                      {index !== 0 && ", "}
                                      {ele}
                                    </>
                                  );
                                })}
                                ,{" "}
                                {ele?.specialities?.map((ele, index) => {
                                  return (
                                    <>
                                      {index !== 0 && ", "}
                                      {ele}
                                    </>
                                  );
                                })}
                              </span>
                            </div>
                            <hr />
                          </div>

                          <div className="d-flex align-items-center justify-content-between">
                            <p className="m-0">0m Est. Wait</p>
                            <div className="d-flex align-items-center gap-2 justify-content-end">
                              <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png"
                                alt=""
                                style={{ width: "6%", objectFit: "contain" }}
                              />

                              <h5 className="m-0">{ele?.review}</h5>
                              <span>({ele?.review} reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default explorepsy;

// if (res[1]) {
//   setPromotionPsychics([...promotionPsychics, res.payload[1]]);
// }
// if (res[2]) {
//   setPromotionPsychics([...promotionPsychics, res.payload[2]]);
// }
