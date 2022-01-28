import React from "react";
import styled from "styled-components";

const TransferModal = () => {
  return (
    <Wrapper>
      <p>Send</p>
      <p>Receive</p>
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
`;

const