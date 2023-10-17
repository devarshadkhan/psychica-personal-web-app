import React, { useEffect, useState } from "react";
import Header from "../../../../Components/Header/Header";
import { API } from "@/api/apiendpoint";
import axiosInstance from "@/api/interceptor";
import { AiOutlineRight } from "react-icons/Ai";

const explorecategory = () => {
  const readingTopic = [
    {
      id: 1,
      name: "Love",
    },
    {
      id: 2,
      name: "Career",
    },
    {
      id: 3,
      name: "Life Path",
    },
    {
      id: 4,
      name: "Money",
    },
  ];
  const ability = [
    {
      id: 1,
      name: "Empath",
    },
    {
      id: 2,
      name: "Medium",
    },
    {
      id: 3,
      name: "Clairvoyant",
    },
    {
      id: 4,
      name: "Clairaudient",
    },
  ];
  const tool = [
    {
      id: 1,
      name: "No Tools",
    },
    {
      id: 2,
      name: "Tarot Physics",
    },
    {
      id: 3,
      name: "Astrology Physics",
    },
    {
      id: 4,
      name: "Numerology",
    },
  ];
  const style = [
    {
      id: 1,
      name: "Inspirational",
    },
    {
      id: 2,
      name: "Compassionate",
    },
    {
      id: 3,
      name: "Straightforward",
    },
  ];

  // Explore Category GET API...

  const [explorecategortdata, setExplorecategortdata] = useState([]);
  const get_category = async () => {
    try {
      const res_API = await axiosInstance.get(API.exploreAllcategory);
      console.log("RESPONSE_API", res_API.data.data);
      setExplorecategortdata(res_API.data.data);
    } catch (err) {
      console.log(err);
    }
  };

 

  // const [explorePsychiccategort, setExplorePsychiccategort] = useState([]);
  // const get_category_Psychics = async (type) => {
  //   console.log("ddghsf",type)
  //   try {
  //     const res_API = await axiosInstance.get(`${API.exploreByCategory}?type=${type}`);
  //     console.log("RESPONSE_API", res_API);
  //     // setExplorecategortdata(res_API.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    get_category();
    // get_category_Psychics();
  }, []);


  return (
    <>
      <Header />

      <div className="explorePsy py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Explore Psychics</h2>
            </div>

            {explorecategortdata.map((ele) => {
              console.log("RES_RES", explorecategortdata, ele);
              return (
                <>
                  <div className="col-md-12 mt-5">
                    <span>Explore By {ele._id}</span>
                  </div>
                  {ele.list.map((item) => {
                    return (
                      <>
                        <div className="col-md-3">
                          <div class="card mt-5 text-center">
                            <div class="card-body">
                              {/* <h5 class="card-title fw-bold text-center">
                          {ele.name}
                        </h5> */}
                              <img
                                src={item.image}
                                width="100%"
                                height="300px"
                                alt=""
                              />
                              <p class="card-text">{item.type}</p>
                              <a
                                href={`/client/dashboard/explorecategory/type?type=${item.type}`}
                                // href={`/client/dashboard/explorepsy`}
                                class="btn btn-dark bg-dark"
                              >
                                Explore{" "}<AiOutlineRight/>
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}

            {/* <div className="col-md-12 mt-5">
              <span>Explore By Ability</span>
            </div> */}
            {/* {ability.map((ele) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="card mt-5 text-center">
                      <div class="card-body">
                        <h5 class="card-title fw-bold text-center">
                          {ele.name}
                        </h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="/client/dashboard/explorepsy"
                          class="btn btn-dark bg-dark"
                        >
                          Explore{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })} */}

            {/* <div className="col-md-12 mt-5">
              <span>Explore By Tool</span>
            </div> */}
            {/* {tool.map((ele) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="card mt-5 text-center">
                      <div class="card-body">
                        <h5 class="card-title fw-bold text-center">
                          {ele.name}
                        </h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="/client/dashboard/explorepsy"
                          class="btn btn-dark bg-dark"
                        >
                          Explore{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })} */}

            {/* <div className="col-md-12 mt-5">
              <span>Explore By Styles</span>
            </div> */}
            {/* {style.map((ele) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="card mt-5 text-center">
                      <div class="card-body">
                        <h5 class="card-title fw-bold text-center">
                          {ele.name}
                        </h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a
                          href="/client/dashboard/explorepsy"
                          class="btn btn-dark bg-dark"
                        >
                          Explore{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })} */}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default explorecategory;