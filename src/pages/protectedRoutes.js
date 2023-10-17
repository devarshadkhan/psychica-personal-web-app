import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
const protectedRoutes = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (router.asPath.includes("client")) {
      if (token) {
        if (
          router.asPath.includes("login") ||
          router.asPath.includes("signup")
        ) {
          router.push("/client/dashboard");
        }
      } 
      else {
        if (
          !(
            router.asPath.includes("login") ||
            router.asPath.includes("signup") ||
            router.asPath.includes("thankyou")
          )
        ) {
          router.push("/client/login");
        }
      }
    } 
  }, [router.asPath]);

  return children;
};

export default protectedRoutes;
