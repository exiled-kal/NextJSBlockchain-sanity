import React from "react";
import styled from "styled-components";

const TransferModal = () => {
  return (
    <Wrapper>
<Se>    </Se>
      <Se>
          <p>Send</p>
      </Se>
      <Se>
          <p>Receive</p>
      </Se>
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

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;
