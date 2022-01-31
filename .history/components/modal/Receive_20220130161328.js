import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Receive = ({ setAction, selectedToken, walletAddress }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = builder.image(selectedToken.logo).url();
    setImageUrl(url);
  }, [selectedToken]);

  return <div></div>;
};

export default Receive;

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const QRContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  font-size: 1.2rem;
`;

const Icon = styled.div`
margin-right: 1rem;
height: 1.8rem;
width: 1.8rem;


`