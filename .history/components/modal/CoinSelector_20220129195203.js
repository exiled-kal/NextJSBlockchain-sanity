import React, { useState } from "react";
import styled from "styled-components";

const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {
  return (
    <Wrapper>
      <h2>Yo {walletAddress}</h2>
    </Wrapper>
  );
};

export default CoinSelector;

const Wrapper = styled.div`
`;

const Title = styled.div`
width: 100%; 
text-align: center;

`
