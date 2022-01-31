import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { BiCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const Receive = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = builder.image(sel)
  },[])

  return <div></div>;
};

export default Receive;
