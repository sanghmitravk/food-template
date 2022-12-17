import "./App.css";
import styled from "styled-components";
import { ESLogo } from "./components/Images/ESLogo";
import { ExclusiveLogo } from "./components/Images/ExclusiveLogo";

export const App = () => {
  const Wrapper = styled.div`
    background: #000;
    display: flex;
  `;
  return (
    <Wrapper>
      <div>
        <ESLogo />
        <ExclusiveLogo />
      </div>
      <div>right</div>
    </Wrapper>
  );
};
