import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import Image from "next/image";

const Transfer = ({
  selectedToken,
  setAction,
  thirdWebTokens,
  walletAddress,
}) => {
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [activeThirdWebToken, setActiveThirdWebToken] = useState();
  const [balance, setBalance] = useState("Fetching ...");

  useEffect(() => {
    const activeToken = thirdWebTokens.find(
      (token) => token.address === selectedToken.contractAddress
    );
    setActiveThirdWebToken(activeToken);
  }, [thirdWebTokens, selectedToken]);

  useEffect(() => {
    console.log(selectedToken);
    const url = imageUrlBuilder(client).image(selectedToken.logo).url();

    setImageUrl(url);
  }, [selectedToken]);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await activeThirdWebToken.balanceOf(walletAddress);
      setBalance(balance.displayValue);
    };
    if (activeThirdWebToken) {
      getBalance();
    }
  }, [activeThirdWebToken]);

  const sendCrypto = async (amount, recipient) => {
    console.log("sending crypto ...");

    if(activeThirdWebToken && amount && recipient)

    // if (activeThirdWebToken && amount && recipient) {
      // const tx = await activeThirdWebToken.transfer(
        // recipient,
        // amount.toString().contact("000000000000000000")
      // );
      // console.log(tx);
      // setAction("transferred");
    // } else {
      // console.error("missing data");
    // }
  };

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            // style={{ color: amount && "whitesmoke" }}
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>
            <p style={{ color: amount && "whitesmoke" }}>
              {selectedToken.symbol}
            </p>
          </span>
        </FlexInputContainer>
        <Warning style={{ color: amount && "#0a0b0d" }}>
          Amount is a required field
        </Warning>
      </Amount>
      <TransferForm>
        <Row>
          <FieldName>To</FieldName>
          <Icon>
            <FaWallet />
          </Icon>
          <Recipient
            // style={{ color: "white" }}
            placeholder="address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Row>
        <Divider />

        <Row>
          <FieldName>Pay With</FieldName>
          <CoinSelectList>
            <Icon>
              <img src={imageUrl} />
            </Icon>
            <CoinName>{selectedToken?.name}</CoinName>
          </CoinSelectList>
        </Row>
      </TransferForm>
      <Row>
        <Continue onClick={() => sendCrypto(amount, recipient)}>
          Continue
        </Continue>
      </Row>
      <Row>
        <BalanceTitle>{selectedToken?.symbol} Balance</BalanceTitle>
        <Balance>
          {balance} {selectedToken?.symbol}
        </Balance>
      </Row>
    </Wrapper>
  );
};

export default Transfer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;

  & > span {
    font-size: 3rem;
    margin-bottom: -2rem;
    color: #3773f5;
  }
`;

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Warning = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`;

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const Continue = styled.button`
  color: white;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2 rem;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
    color: #3773f5;
    transition: 0.3s ease-in;
  }
`;

const BalanceTitle = styled.div``;

const Balance = styled.div``;
