import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import Side from "../components/Side";
import { ThirdwebSDK } from "@3rdweb/sdk";


const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);
const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://axduyrmr.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%20%20%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    return getSanityAndThirdWebTokens();
  }, []);

  console.log("Sanity ->", sanityTokens);
  console.log("ThirdWeb ->", thirdWebTokens);
  return (
    <Wrapper>
      <Side />
      <MainContainer>
        <Header walletAddress={address} />
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
