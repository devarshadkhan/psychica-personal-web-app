import React, { useEffect, useState } from "react";
import Header from "../../../../Components/Header/Header";
import axiosInstance from "@/api/interceptor";
import { API } from "@/api/apiendpoint";

const index = () => {
    const [addMoney,setAddMoney] = useState()
    const [getWallet,setGetWallet] = useState()
    const addWallet = async () => {
        const userID = JSON.parse(localStorage.getItem("Information"));
        console.log("USERID",userID._id)
        await axiosInstance.post(API.addWallet, {
          user: userID._id,
          balance:parseInt(addMoney)
        })
        .then((res)=>{
          
        })
        .catch((err)=>{
          console.log(err)
        })
      };

      const get_wallet_Balance= async () => {
        const userID = JSON.parse(localStorage.getItem("Information"));
        console.log("USERID",userID._id)
        await axiosInstance
          .get(`${API.getWallet}?user=${userID._id}`)
    
          .then((res) => {
            setGetWallet(res.data.wallet.wallet.balence)
                console.log("RESSS",res.data.wallet.wallet.balence);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      useEffect(() => {
        get_wallet_Balance()
      }, [])
      
    
  return (
    <>
    <Header/>
      <div className="wallet py-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold">Wallet</h1>

              <h2 className="mt-5 fw-bold">Total Amount: ${getWallet || 0}</h2>

              <input
                type="email"
                class="form-control w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add wallet"
                value={addMoney}
                onChange={(e)=>setAddMoney(e.target.value)}
              />

              <button onClick={addWallet} className="btn btn-primary mt-3">Add wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
