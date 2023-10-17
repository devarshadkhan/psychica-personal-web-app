import {configureStore} from "@reduxjs/toolkit"
import authLogin from "./client/login"
import authSignup from "./client/signup"
export const store = configureStore({
        reducer:{
            login:authLogin,
            signUp:authSignup
        }
})