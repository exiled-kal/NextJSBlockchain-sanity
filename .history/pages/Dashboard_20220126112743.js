import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import Side from "../components/Side";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <Side />
      <MainContainer>
        <Header  address={address}/>
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
