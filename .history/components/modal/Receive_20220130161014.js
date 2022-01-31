import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Receive = ({setAction,selectedToken,walletAddress}) => {
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
`

const Content = styled.div`
border: 1px solid #282b2f;
bo
`
