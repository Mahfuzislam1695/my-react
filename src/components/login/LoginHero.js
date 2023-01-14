import React from "react";
import { LoginHeroContainer } from "./Login.style";

const LoginHero = () => {
  return (
    <LoginHeroContainer>
        {/* hero */}
      <img
        style={{
          height: "100vh",
          width: "auto",
        }}
        src="https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
      />{" "}
    </LoginHeroContainer>
  );
};

export default LoginHero;
