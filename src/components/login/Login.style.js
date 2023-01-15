import styled from "styled-components";
const bg ="https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"

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
  min-width: 0;
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
  display: none;
  height: 100%;
  padding: 2.5rem;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #4c1d95;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  background-image: url(${bg});


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
  padding: 2rem;
  background-color: #ffffff;

  @media (min-width: 640px) {
    width: auto;
    border-radius: 0.5rem;
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
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
  background-color: #e5e7eb;
  width: 4rem;
  height: 1px;
`;
export const OrText = styled.span`
  color: #d1d5db;
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
  border-color: #d1d5db;
  border-radius: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    outline: 0;
    border-color: #6366f1;
  }
`;

export const HeadingDiv = styled.div`
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  color:#FFFFFF;

  @media (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`;
export const HeadingSubDiv = styled.div`
  color: #E5E7EB; 
font-weight: 400; 

  @media (min-width: 640px) {
    font-size: 0.875rem;
line-height: 1.25rem; 
  }

  @media (min-width: 1280px) {
    font-size: 1rem;
line-height: 1.25rem;
  }
`;
export const EmptyDiv = styled.div`
 position: absolute; 
top: 0;
right: 0;
bottom: 0;
left: 0; 
z-index: 0;
background-image: linear-gradient(to bottom,  #4F46E5,  #3B82F6); 
opacity: 0.75; 
`;
