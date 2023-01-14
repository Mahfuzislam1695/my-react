import styled from "styled-components";

export const LoginMainDiv = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1 1 auto;
min-width: 0 ;
background-color: #ffffff;
@media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  } 
  @media (min-width: 768px) {
    align-items: flex-start; 
  }
  
`;
export const LoginHeroContainer = styled.div`
/* flex-grow: 4; */
  display: none; 
  height: 100%;
  padding: 2.5rem; 
flex: 1 1 auto; 
justify-content: center; 
align-items: center; 
  /* padding: 2.5rem; */
   /* border: 2px solid red; */
  /* display: flex;
  flex-grow: 4;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
  background-color: #4c1d95;
  background-repeat: no-repeat;
  /* color: #ffffff; */
  position: relative;
  background-size: cover;
  /*  */
  /* */
  @media (min-width: 640px) {
    width: 50%;
  }
   @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`;


export const LoginProcessContainer = styled.div`
  /* display:flex; */
  /* border: 2px solid red; */
  /* flex-grow: 4; */
  /* width: 40%; */
  /* width: 100%; */
  padding: 2rem;
  background-color: #ffffff;  
  /* padding: 2.5rem;  */
 
  @media (min-width: 640px) {
    width: auto;
    border-radius: 0.5rem;
    /* width: auto;
    border-radius: 0.5rem; */
    /* border: 5px solid black; */
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
    padding: 2.5rem;
    border-radius: 0;
    width: 40%;

    
  }
  @media (min-width: 1024px) {
    padding: 3.5rem; 
  }
  @media (min-width: 1280px) {
    width: 40%; 
  }
`;

export const LoginProcessDiv = styled.div`
  max-width: 28rem;
  gap: 2rem;
  width: 100%;
`;
export const WelcomeDiv = styled.div`
  text-align: center;
`;
export const WelcomeText = styled.h2`
  margin-top: 1.5rem;
  color: #111827;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;
export const WelcomeSubText = styled.p`
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const LogoDiv = styled.div`
 margin-top: 2rem;
 display: flex; 
flex-direction: row; 
justify-content: center; 
align-items: center;
gap: 0.75rem;
`;
export const LoginLink = styled.a`
  display: inline-flex;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  background-color: #1e3a8a;
  cursor: pointer;
  transition-timing-function: ease-in;
  transition-duration: 300ms;
  /* transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform; */
  /* transition-duration: 300ms; */
  /* transition-timing-function: cubic-bezier(0.4, 0, 1, 1); */
&:hover{
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

`;
export const OrDiv = styled.div`
  display: flex;
  margin-left: 0.5rem;
   margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;
export const Line = styled.span`
  background-color: #E5E7EB; 
width: 4rem; 
height: 1px; 
`;
export const OrText = styled.span`
color: #D1D5DB; 
font-weight: 500; 
`;
export const LoginForm = styled.form`
  margin-top: 2rem;
`;
export const SignupText = styled.p`
  display: flex;
  margin-top: 2.5rem;
  color: #6b7280;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignupLink = styled.a`
  color: #818cf8;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`;
export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  color: #f3f4f6;
  font-weight: 600;
  letter-spacing: 0.025em;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(to right, #6366f1, #2563eb);
  cursor: pointer;
  transition-timing-function: ease-in;
  transition-duration: 500ms;
  border: none;
  &:hover {
    background-image: linear-gradient(to left, #3b82f6, #4f46e5);
  }
`;

export const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;
export const RememberDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const RememberInput = styled.input`
  background-color: #3b82f6;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border-color: #d1d5db;
  &:focus {
    --ring-color: #60a5fa;
  }
`;
export const RememberText = styled.label`
  display: block;
  margin-left: 0.5rem;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const ForgotText = styled.a`
  color: #818cf8;
  cursor: pointer;
  &:hover {
    color: #3b82f6;
  }
`;
export const InputLabel = styled.label`
  margin-left: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.025em;
`;
export const Input = styled.input`

  width: 100%;
  font-size: 1rem;
line-height: 1.5rem;
padding: 0.5rem 1rem; 
border-bottom-width: 1px; 
border-color: #D1D5DB;
border-radius: 1rem;
border-top:none;
border-left: none;
border-right: none;
&:focus {
    outline: 0;
    border-color: #6366F1; 
  }  
  /* margin-top: .25rem;
  align-content: center;
  width: 100%;
  font-size: 1rem;
line-height: 1.5rem;
padding: 0.5rem 1rem;
border-bottom-width: 1px;
border-radius: 1rem; 
border-color: #D1D5DB;


  &:focus {
    outline: 0;
    border-color: #6366F1; 
  } */
`;
