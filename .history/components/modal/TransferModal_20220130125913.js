import React, { useState } from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Transfer from "./Transfer";
import { TailSpin } from "react-loader-spinner";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );

      case "receive":
        return <h2>receive</h2>;
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "transferring":
        return (
          <div style={{
            width: '100%',
            
            
            
            }}>
            <h2>transferring your crypto to your wallet</h2>
            <TailSpin
              height="100"
              width="100"
              color="grey"
              ariaLabel="loading"
              align="center"
              justify="center"
            />
          </div>
        );

      case "transferred":
        return <h2 style={{ color: "green" }}>transfer completed</h2>;
      default:
        return <h2>send</h2>;
    }
  };
  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
