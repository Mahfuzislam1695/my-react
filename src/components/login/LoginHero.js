import React from "react";
import { EmptyDiv, HeadingDiv, HeadingSubDiv, LoginHeroContainer } from "./Login.style";

const LoginHero = () => {
  return (
    <LoginHeroContainer>
      {/* hero */}
      {/* <img
        style={{
          height: "100vh",
          width: "auto",
        }}
        src="https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
      />{" "} */}
      <EmptyDiv></EmptyDiv>
      <div
        style={{
          zIndex: "10",
          width: "100%",
          maxWidth: "28rem",
        }}
      >
        <HeadingDiv>Mahfuz Islam Login Hero..</HeadingDiv>
        <HeadingSubDiv>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta
          tempora expedita ipsam voluptate ipsa rerum nulla alias fugiat atque.
          Eum fuga, laudantium aut ab quos asperiores labore esse. Nisi.
        </HeadingSubDiv>
      </div>
    </LoginHeroContainer>
  );
};

export default LoginHero;
