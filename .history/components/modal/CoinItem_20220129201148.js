import React from "react";
import styled from "styled-components";

const CoinItem = ({
  token,
  sender,
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
}) => {
  return <div>{sanityTokens[0]?.name}</div>;
};

export default CoinItem;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
margin-right: 1rem;
height:1.8rem;
width:1.8rem;
border-radius

`