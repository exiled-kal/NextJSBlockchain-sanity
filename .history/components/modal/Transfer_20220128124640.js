import React, { useState } from "react";
import styled from "styled-components";

const Transfer = () => {
  const [amount, setAmount] = useState();

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>
            <p>ETH</p>
          </span>
        </FlexInputContainer>
        <Warning style={{ color: amount && "#0a0b0d" }}>
          Amount is a required field
        </Warning>
      </Amount>
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
    margin-bottom: 0.5rem;
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

const Recipient = styled.div`
flex:1;
border

`