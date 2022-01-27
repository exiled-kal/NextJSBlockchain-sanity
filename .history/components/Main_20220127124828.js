import React from "react";
import Portfolio from "./Portfolio";
import styled from "styled-components";
import Promos from "./Promos";

const Main = ({ walletAddress,sanityTokens,thirdWebTokens}) => {
  return (
    <Wrapper>
      <Portfolio walletAddress,sanityTokens,thirdWebTokens/>
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh-64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`;
