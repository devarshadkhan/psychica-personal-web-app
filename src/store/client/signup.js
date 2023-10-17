import { API } from "@/api/apiendpoint";
import axiosInstance from "@/api/interceptor";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  isSuccess: false,
};

//   localStorage.getItem("data")
// localStorage.getItem("issue")
// localStorage.getItem("other_issues")
// localStorage.getItem("CaliforniaPsychics")
// localStorage.getItem("password")
// localStorage.getItem("socialMedia")

export const clientSignUp = createAsyncThunk(
  "signup",
  async ({ getState, rejectWithValue }) => {
    try {
      const data = JSON.parse(localStorage.getItem("data"));
      console.log("DATA_LOCAL_STORAGE",data)
      // const lastName = JSON.parse(localStorage.getItem("data"));
      // const DOB = JSON.parse(localStorage.getItem("data"));
      // const email = JSON.parse(localStorage.getItem("data"));
      // const gender = JSON.parse(localStorage.getItem("data"));
      // const pincode = JSON.parse(localStorage.getItem("data"));
      const password = JSON.parse(localStorage.getItem("password"));
      const issue = JSON.stringify(localStorage.getItem("issue"));
      const otherIssue = JSON.stringify(localStorage.getItem("other_issues"));
      const refSite = JSON.stringify(
        localStorage.getItem("CaliforniaPsychics")
      );
      const findUs = JSON.stringify(localStorage.getItem("socialMedia"));
      const requestData = {
        first_name: data.firstName,
        last_name: data.lastName,
        dob: data.dob,
        email: data.email,
        gender: data.gender,
        pincode: data.zipCode,
        password: password.password,
        issues: issue,
        other_issues: otherIssue,
        refSite: refSite,
        find_us: findUs,
        role: "client",
      };
      const response = await axiosInstance
        .post(
          API.signUp,
          requestData
          //   {

          //     // "first_name": localStorage.getItem('data'),
          //     // "last_name": localStorage.getItem('data'),
          //     // "dob": localStorage.getItem('data'),
          //     // "email": localStorage.getItem('data'),
          //     // "gender": localStorage.getItem('data'),
          //     // "pincode": localStorage.getItem('data'),
          //     "password": localStorage.getItem('password'),
          //     "issues": localStorage.getItem('issue'),
          //     "other_issues": localStorage.getItem('other_issues'),
          //     "refSite": localStorage.getItem('CaliforniaPsychics'),
          //     "find_us": localStorage.getItem('socialMedia'),
          //     "role": "client"

          // }
        )

        .then((data) => data);
      return response;
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const ClientSignUpSlice = createSlice({
  name: "ClientSignup",
  initialState,
  reducers: {},
  extraReducers: {
    [clientSignUp.pending]: (state) => {
      state.loading = true;
    },
    [clientSignUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [clientSignUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default ClientSignUpSlice.reducer;
